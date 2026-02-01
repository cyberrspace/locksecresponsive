/* =========================
   Core Estate Model
========================= */
export interface Estate {
  _id: string;
  estateName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  status: "active" | "inactive";
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

/* =========================
   REQUEST PAYLOADS
========================= */
export interface RegisterEstatePayload {
  estateName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export interface VerifyEmailPayload {
  verificationToken: string;
}

/* =========================
   GENERIC API RESPONSE
========================= */
export interface ApiResponse<T> {
  success: boolean;
  status: number;
  message: string;
  data: T;
}

/* =========================
   REQUEST PAYLOADS
========================= */
export interface ResendVerificationPayload {
  email: string;
}

/* =========================
   GENERIC API RESPONSE
========================= */
export interface ApiResponse<T> {
  success: boolean;
  status: number;
  message: string;
  data: T;
}
