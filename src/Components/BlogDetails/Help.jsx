import { GradientButton } from "../SharedComponent/Button/GradientButton";
import { PrimaryButton } from "../SharedComponent/Button/PrimaryButton";

export const Help = () => {
  return (
    <div className="bg-[#DADADA]/10 shadow p-6">
      <h2 className="text-lg font-semibold mb-3">How can We Help You</h2>
      <p className="text-sm text-gray-600 mb-4">
        We appreciate your interest please complete the form below and we will
        contact you to discuss your warehousing, distribution, air, ocean
        freight or any other logistics needs.
      </p>
      <GradientButton>Contact</GradientButton>
    </div>
  );
};
