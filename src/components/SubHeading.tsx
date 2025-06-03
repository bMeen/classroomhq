type SubHeadingProps = {
  heading: string;
  paragraph: string;
};

function SubHeading({ heading, paragraph }: SubHeadingProps) {
  return (
    <div className="mb-5 space-y-1">
      <h3 className="text-base font-medium md:text-lg">{heading}</h3>
      <p className="text-sm md:text-base">{paragraph}</p>
    </div>
  );
}

export default SubHeading;
