"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomAlert from "@/components/CustomAlert";
import KYCForm from "./KYCForm";
import axiosInstance from "@/lib/axiosInstance";
import useAuthContext from "@/lib/hooks/useAuthContext";
import { toast } from "sonner";
import KYCStatus from "./KYCStatus";

export default function KYC() {
  const [isFormActive, setIsFormActive] = useState(false);
  const { authData: user } = useAuthContext();

  async function handleFormSubmit(formData, handleSuccess, handleError) {
    if (!formData.identificationImage) {
      return handleError("Must select a valid image");
    }
    if (Object.values(formData).some((value) => value === "")) {
      return handleError("All fields are required to proceed");
    }

    try {
      const response = await axiosInstance.post("/api/kyc", {
        userId: user.id,
        image: formData.identificationImage,
        address: formData.address,
        nationality: formData.nationality,
        identification: formData.identificationMethod,
        gender: formData.gender,
      });

      handleSuccess(response.data.message);
      toast.success("KYC Record created successfully");
      console.log(response);
    } catch (error) {
      handleError(error.response ? error.response.data.message : error.message);
      toast.error("Failed to create KYC Record");
    }
  }

  return (
    <Card className="self-center p-4 mt-10">
      <CardHeader>
        <CardTitle className="text-xl font-bold">KYC Verification</CardTitle>
        <CardDescription className="text-muted-foreground text-sm leading-10">
          Verify your account to unlock special exclusive features
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isFormActive ? (
          <KYCForm handleFormSubmit={handleFormSubmit} />
        ) : (
          <KYCStatus setIsFormActive={setIsFormActive} />
        )}
      </CardContent>
    </Card>
  );
}
