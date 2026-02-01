import api from "./axios";
import type {
  Estate,
  VerifyEmailPayload,
  ApiResponse,
  ResendVerificationPayload,
} from "@/types/estate";

/* =========================
   REGISTER ESTATE
========================= */
export interface RegisterEstatePayload {
  email: string;
  password: string;
  estateName: string;
  fullName: string;
  phoneNumber: string;
}

export const registerEstate = async (
  payload: RegisterEstatePayload
): Promise<ApiResponse<Estate>> => {
  const response = await api.post<ApiResponse<Estate>>(
    "/estates/register",
    payload
  );
  return response.data;
};

/* =========================
   LOGIN ESTATE ADMIN
========================= */
export interface LoginEstatePayload {
  email: string;
  password: string;
}

export interface LoginEstateResponse {
  token: string;
  estate: Estate;
}

export const loginEstate = async (
  payload: LoginEstatePayload
): Promise<ApiResponse<LoginEstateResponse>> => {
  const response = await api.post<ApiResponse<LoginEstateResponse>>(
    "/estates/login",
    payload
  );
  return response.data;
};

/* =========================
   VERIFY EMAIL
========================= */
export const verifyEstateEmail = async (
  payload: VerifyEmailPayload
): Promise<ApiResponse<Estate>> => {
  const response = await api.post<ApiResponse<Estate>>(
    "/estates/verify-email",
    payload
  );
  return response.data;
};

/* =========================
   RESEND VERIFICATION EMAIL
========================= */
export const resendVerificationCode = async (
  payload: ResendVerificationPayload
): Promise<ApiResponse<string>> => {
  const response = await api.post<ApiResponse<string>>(
    "/estates/resend-verification",
    payload
  );
  return response.data;
};
