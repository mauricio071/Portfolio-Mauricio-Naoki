export interface ContactBody {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  status: string;
  message: string;
  description: string;
}
