import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";

export const Sections = () => {
  return (
    <div>
      <SectionLink link="#" sectionName="Writings" />
      <SectionLink link="#" sectionName="Projects" />
      <SectionLink link="#" sectionName="Experience" />
    </div>
  );
};

interface SectionLinkProps {
  link: string;
  sectionName: string;
}

const SectionLink = ({ link, sectionName }: SectionLinkProps) => {
  return (
    <a href={link}>
      <div className="flex gap-2 items-center text-sm">
        {sectionName} <CaretRightIcon />
      </div>
    </a>
  );
};
