import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReview } from "api/booking.api.js";
import { useToast } from "hooks/index.js";
import { useState } from "react";
import styled from "styled-components";
import { ButtonPrimary } from "ui/base/Button/ButtonStyled";
import { Modal } from "ui/base/modal/Modal";
import { StarReview } from "ui/base/starReview/StarReview";
import { TextArea } from "ui/base/textArea/TextArea";
import { defaultThemeColors, fonts } from "ui/theme/index.js";
import { getAvatarUrl } from "utils/index.js";
import { UserIcon } from "../../icons";

export const ReviewModal = ({
  show,
  handleClose,
  selectedClass,
  isInstructor,
}) => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    review: "",
    rating: 0,
  });

  const onFormChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      useToast("success", "Your review has been submitted");
      queryClient.invalidateQueries([
        isInstructor ? "getPastClassesForTeacher" : "getPastClassesForUser",
      ]);
      handleClose();
    },
    onError: (err) => {
      useToast("error", err?.response?.data?.Message || "Error sending Review");
    },
  });

  return (
    <Modal show={show} handleClose={handleClose} minHeight={200} maxWidth={500}>
      <Section>
        <HeaderWrapper>
          <ClassInfo>
            <Avatar>
              {selectedClass?.profile_pic ? (
                <img
                  src={getAvatarUrl(selectedClass?.profile_pic)}
                  alt={selectedClass?.first_name}
                />
              ) : (
                <UserIcon color="txt" />
              )}
            </Avatar>
            <Info>
              <Name>{selectedClass?.first_name}</Name>
            </Info>
          </ClassInfo>
        </HeaderWrapper>
        <Container>
          <FormWrapper>
            <div className="review">
              <StarReview
                rate={formData.rating}
                setRate={(rating) => onFormChange("rating", rating)}
              />
            </div>
            <TextArea
              placeholder={`How was your class with ${selectedClass?.first_name}?`}
              value={formData.review}
              setValue={(text) => onFormChange("review", text)}
              maxLength={400}
            />
          </FormWrapper>

          <ButtonPrimary
            onClick={() =>
              mutate({
                booking_id: selectedClass?.booking_id,
                booking_slot_id: selectedClass?.id,
                reviewer_receiver_id: isInstructor
                  ? selectedClass?.user_id
                  : selectedClass?.teacher_user_id,
                rating: formData.rating,
                review: formData.review,
                user_type: isInstructor ? 2 : 1,
              })
            }
            disabled={formData.rating < 1 || isLoading}
          >
            Send Review
          </ButtonPrimary>
        </Container>
      </Section>
    </Modal>
  );
};

const Section = styled.div`
  font-family: Montserrat, sans-serif;
  flex-direction: column;
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;

const HeaderWrapper = styled.div`
  flex-direction: column;
  display: flex;
  gap: 1rem;
`;

const ClassInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${defaultThemeColors.inputBgNeutral};
  border-radius: 8px;
  object-fit: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    height: 50px;
    width: 50px;
    opacity: 0.5;
  }

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  flex: 1;
  display: grid;
  gap: 1rem;
`;

const Name = styled.div`
  font-size: ${fonts.sizes.regular};
  font-weight: bold;
`;

const Container = styled.div`
  display: grid;
  gap: 1rem;
`;
const FormWrapper = styled.div`
  display: grid;
  gap: 1rem;

  & > .review {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
