import React from "react";
import GDPR from "../assets/gdpr.png";
import Groups from "../assets/group_admins.png";
import Authentication from "../assets/authentication.png";
import Access from "../assets/user_access.png";

const FeatureSection = () => {
  return (
    <div className="w-full px-24 text-center md:text-start">
      <div className="flex flex-col md:flex-row items-center">
        <div className="pb-8 md:pb-0">
          <img className="w-[300px] md:w-[700px]" src={GDPR} alt="/" />
        </div>
        <div className="md:w-1/2 space-y-7">
          <h3 className="text-md md:text-lg text-blue-500 font-semibold text- uppercase">
            user pii data deletion
          </h3>
          <h2 className="text-2xl md:text-4xl text-[#092640] font-bold">
            Maintain GDPR Compliance
          </h2>
          <p className="text-lg md:text-2xl text-[#46505b]">
            Stay compliant with privacy rules and regulations at scale with
            self-service data deletion, which allows admins to immediately erase
            user data as needed.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center md:flex-row">
        <div className="md:w-1/2 space-y-7">
          <h3 className="text-md md:text-lg text-blue-500 font-semibold text- uppercase">
            user groups
          </h3>
          <h2 className="text-2xl md:text-4xl text-[#092640] font-bold">
            Save time with group admins
          </h2>
          <p className="text-lg md:text-2xl text-[#46505b]">
            Delegate specific team members with group admin privilages to manage
            users, processes, and other account settings.
          </p>
        </div>
        <div className="pb-8 md:pb-0">
          <img className="w-[300px] md:w-[700px]" src={Groups} alt="/" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="pb-8 md:pb-0">
          <img
            className="w-[300px] md:w-[700px]"
            src={Authentication}
            alt="/"
          />
        </div>
        <div className="md:w-1/2 space-y-7">
          <h3 className="text-md md:text-lg text-blue-500 font-semibold text- uppercase">
            single sign-on (sso)
          </h3>
          <h2 className="text-2xl md:text-4xl text-[#092640] font-bold">
            Reduce risk with secure authentication
          </h2>
          <p className="text-lg md:text-2xl text-[#46505b]">
            Deploy Calendly confidently with support for SAML-based SSO with
            leading identity providers Okta, Ping Identity, Azure, OneLogin and
            Auth0.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center md:flex-row">
        <div className="md:w-1/2 space-y-7">
          <h3 className="text-md md:text-lg text-blue-500 font-semibold text- uppercase">
            scim provisioning
          </h3>
          <h2 className="text-2xl md:text-4xl text-[#092640] font-bold">
            Manage user access at scale
          </h2>
          <p className="text-lg md:text-2xl text-[#46505b]">
            Efficiently onboard and off-board employees with automatic
            provisioning and de-provisioning via SCIM with Okta, OneLogin, and
            Microsoft Azure.
          </p>
        </div>
        <div className="pb-8 md:pb-0">
          <img className="w-[300px] md:w-[700px]" src={Access} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
