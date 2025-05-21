type SubHeadingProps = {
  heading: string;
  paragraph: string;
};

function SubHeading({ heading, paragraph }: SubHeadingProps) {
  return (
    <div className="mb-5 space-y-1">
      <h3 className="text-lg font-medium">{heading}</h3>
      <p className="">{paragraph}</p>
    </div>
  );
}

export default SubHeading;
