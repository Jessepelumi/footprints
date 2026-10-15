import { IconProps } from "@phosphor-icons/react";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  MailboxIcon,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

export const Communication = () => {
  return (
    <div>
      <CommunicationLink
        link=""
        icon={GithubLogoIcon}
        text="github.com/Jessepelumi"
      />

      <CommunicationLink
        link=""
        icon={LinkedinLogoIcon}
        text="linkedin.com/in/jeolad"
      />

      <CommunicationLink
        link=""
        icon={MailboxIcon}
        text="jesseoluwapelumi01@gmail.com"
      />
    </div>
  );
};

interface CommunicationLinkProps {
  link: string;
  icon: React.ElementType<IconProps>;
  text: string;
}

const CommunicationLink = ({
  link,
  icon: Icon,
  text,
}: CommunicationLinkProps) => {
  return (
    <a href={link}>
      <div className="flex gap-2 items-center text-sm">
        <Icon /> {text}
      </div>
    </a>
  );
};
