import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Go back to login page"
    >
      <div className="w-full flex justify-center items-center ">
        <ExclamationTriangleIcon className="text-destructive size-10" />
      </div>
    </CardWrapper>
  );
};
