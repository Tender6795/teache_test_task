import { useMutation } from "@tanstack/react-query";
import { login } from "api/auth.api.ts";
import { useAuth } from "context/AuthContext.jsx";
import { useToast } from "hooks/index.js";
import { appRoute } from "pages/app/app.routes";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppButton } from "ui/base/appButton/AppButton.jsx";
import { HelperText } from "ui/base/helperText/HelperText.jsx";
import { InputSignUp } from "ui/base/InputSignUp/InputSignUp";
import { Modal } from "ui/base/modal/Modal.jsx";
import { EmailIcon, LockIcon } from "ui/icons/index.js";
import {
  capitalizeFirstLetter,
  emailValidation,
  removeEmojis,
  safeLocalStorage,
} from "utils";
import { pixelTrackEvent } from "utils/facebookPixel.js";
import { getAuth, signInWithCustomToken } from "firebase/auth";

export const LoginModal = ({ show, handleClose, setSignupModal }) => {
  const navigate = useNavigate();
  const { updateAuthData } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    platform: "web",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const clearFields = () => {
    setFormData({
      email: "",
      password: "",
    });
    setFormErrors({
      email: "",
      password: "",
    });
  };

  const onChangeInput = (key, value) => {
    const isError = value.trim() === "" || !value;
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    setFormErrors((prevState) => ({
      ...prevState,
      [key]: isError ? `${capitalizeFirstLetter(key)} must be filled ` : "",
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      const auth = getAuth();
      signInWithCustomToken(auth, data.token_firebase)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("[FIREBASE] success => ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("[FIREBASE] error => ", errorCode, errorMessage);
        });
      const token = data.token || "";
      updateAuthData(token);
      safeLocalStorage.setItem("token", token);
      handleClose();
      navigate("/");
    },
    onError: (err) => {
      const error = err?.response?.data;

      if (error.type === "InvalidPassword") {
        setFormErrors((prevState) => ({
          ...prevState,
          password: "Enter correct password",
        }));
      }

      if (error.type === "InvalidEmail") {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "This email is not registered with us",
        }));
      }

      if (error.type === "inactive") {
        useToast("error", "Inactive");
      }

      if (error.type === "blocked") {
        useToast("error", "Access to your account has been restricted");
      }

      if (error.type === "unknown") {
        useToast("error", "Login failed");
      }
    },
  });

  const onSubmit = () => {
    pixelTrackEvent("Login: CLicked on Log in");
    if (!emailValidation(formData.email)) {
      setFormErrors((prevState) => ({
        ...prevState,
        email:
          formData.email?.length > 0
            ? "Enter correct email"
            : "Email must be filled",
      }));
    } else if (formData.email !== "" && formData.password !== "") {
      mutate({ ...formData, email: formData.email.toLocaleLowerCase() });
    } else {
      Object.keys(formData).map((item) => {
        const isError = formData[item].trim() === "";
        setFormErrors((prevState) => ({
          ...prevState,
          [item]: isError
            ? `${capitalizeFirstLetter(item)} must be filled `
            : "",
        }));
      });
    }
  };

  useEffect(() => {
    pixelTrackEvent("Enter Login page");
  }, []);

  return (
    <Modal show={show} handleClose={handleClose} maxWidth={500}>
      <LoginLeftContainer>
        <LoginTextContainer>
          <svg
            width="192"
            height="192"
            viewBox="0 0 192 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M96 190C147.915 190 190 147.915 190 96C190 44.0852 147.915 2 96 2C44.0852 2 2 44.0852 2 96C2 147.915 44.0852 190 96 190Z"
              fill="#554DF1"
            />
            <path
              d="M163.975 96.2793C163.975 101.67 162.103 106.237 158.359 109.98C154.766 113.574 150.273 115.371 144.883 115.371C139.642 115.371 135.075 113.574 131.182 109.98C127.438 106.237 125.566 101.67 125.566 96.2793C125.566 88.3431 122.721 81.5299 117.031 75.8398C111.341 70 104.528 67.0801 96.5918 67.0801C88.5059 67.0801 81.6178 70 75.9277 75.8398C70.2376 81.5299 67.3926 88.3431 67.3926 96.2793C67.3926 104.215 70.2376 111.104 75.9277 116.943C81.6178 122.633 88.5059 125.479 96.5918 125.479C101.683 125.479 106.1 127.35 109.844 131.094C113.737 134.688 115.684 139.18 115.684 144.57C115.684 149.811 113.812 154.303 110.068 158.047C106.325 161.79 101.833 163.737 96.5918 163.887C77.5749 163.587 61.7025 156.999 48.9746 144.121C36.2467 131.243 29.5833 115.296 28.9844 96.2793C29.5833 77.2624 36.1719 61.39 48.75 48.6621C61.4779 35.7845 77.3503 29.1211 96.3672 28.6719C115.534 29.1211 131.481 35.8594 144.209 48.8867C157.087 61.7643 163.675 77.5618 163.975 96.2793ZM77.5 96.2793C77.5 91.0384 79.2969 86.5462 82.8906 82.8027C86.6341 78.9095 91.2012 76.9629 96.5918 76.9629C101.833 76.9629 106.325 78.9095 110.068 82.8027C113.962 86.5462 115.908 91.0384 115.908 96.2793C115.908 101.67 113.962 106.237 110.068 109.98C106.325 113.574 101.833 115.371 96.5918 115.371C91.2012 115.371 86.6341 113.574 82.8906 109.98C79.2969 106.237 77.5 101.67 77.5 96.2793Z"
              fill="white"
            />
          </svg>

          <HelperText
            centerMobile
            center
            size="regular"
            sizeMobile="regular"
            weight={600}
          >
            Sign in to continue
          </HelperText>
        </LoginTextContainer>

        <LoginFormContainer>
          <InputSignUp
            id="email"
            icon={<EmailIcon />}
            placeholder="Email"
            value={formData.email}
            setValue={(input) =>
              onChangeInput("email", removeEmojis(input.trim()))
            }
            isError={formErrors?.email}
            errorText={formErrors?.email}
          />
          <InputSignUp
            id="password"
            icon={<LockIcon />}
            placeholder="Password"
            type="password"
            value={formData.password}
            setValue={(input) =>
              onChangeInput("password", removeEmojis(input.trim()))
            }
            isError={formErrors?.password}
            errorText={formErrors?.password}
          />
          <Link
            to={appRoute.forgotPassword.fullPath}
            style={{ textAlign: "center" }}
          >
            <HelperText
              color="placeholder"
              size="regular"
              sizeMobile="regular"
              centerMobile
              center
              style={{ cursor: "pointer" }}
            >
              Forgot password?
            </HelperText>
          </Link>
          <AppButton onClick={onSubmit} disabled={isLoading}>
            Log in
          </AppButton>
          <Link style={{ textAlign: "center" }}>
            <HelperText
              color="pink"
              centerMobile
              center
              size="regular"
              sizeMobile="regular"
              style={{ cursor: "pointer" }}
              onClick={() => {
                pixelTrackEvent("Login: CLicked on Sign up");
                handleClose();
                setSignupModal(true);
              }}
            >
              Sign up
            </HelperText>
          </Link>

          <HelperText centerMobile center color="blue">
            Sign up as an instructor and receive $25 via PayPal.
            <br />
            Offer valid for approved, qualified instructors.
          </HelperText>
        </LoginFormContainer>
      </LoginLeftContainer>
    </Modal>
  );
};

const LoginLeftContainer = styled.div`
  display: grid;
  gap: 40px;
  width: 100%;
  max-width: 420px;
  margin-inline: auto;
  font-family: Montserrat, sans-serif;
  margin-top: 2dvh;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
  padding: 2rem;
`;

const LoginTitleContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const LoginTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & > svg {
    width: 70px;
    height: 70px;
  }
`;

const LoginFormContainer = styled.div`
  display: grid;
  gap: 1rem;
`;
