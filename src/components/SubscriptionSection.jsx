import { Button, Image, Input } from "@nextui-org/react";
import React from "react";
import { FiMail } from "react-icons/fi";

const SubscriptionSection = () => {
  return (
    <div className="flex justify-between bg-gray-100 py-6 px-4 items-center mb-16 ">
      <div className="flex flex-col gap-4 w-full h-auto justify-center">
        <p className="lg:text-3xl text-lg font-bold capitalize">
          Subscribe To Our Newsletter
        </p>
        <div className="flex flex-col mb-2">
          <p className="text-md capitalize">Get The Latest Insights</p>
          <p className="text-xs text-gray-500">
            See posts directly from your inbox weekly
          </p>
        </div>
        <div className="flex lg:flex-row gap-2 flex-col">
          <Input
            type="email"
            //   label="Email"
            startContent={<FiMail />}
            startConten
            variant="bordered"
            isInvalid={false}
            errorMessage="Please enter a valid email"
            className="lg:w-1/2 w-full"
          />
          <Button className="w-full lg:w-auto">Subscribe</Button>
        </div>
        <p className="text-xs">
          By subscribing you agree to our {" "}
          <span className="text-blue-500"> terms of service</span>
        </p>
      </div>

      <div className="hidden lg:block w-full h-auto">
      <div className="flex justify-end items-center">
          <Image
          isZoomed
          width={300}
          height={300}
          src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
          fallbackSrc="Image Not Found"
        />
      </div>
      
      </div>
    </div>
  );
};

export default SubscriptionSection;
