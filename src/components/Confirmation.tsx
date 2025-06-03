import Button from "./Button";

type ConfirmationProps = {
  title: string;
  description: string;
  type: string;
  action: () => void;
  onCloseModal?: () => void;
};

function Confirmation({
  onCloseModal,
  action,
  type,
  description,
  title,
}: ConfirmationProps) {
  const onClick = () => {
    action();
    onCloseModal?.();
  };
  return (
    <div>
      <h3 className="text-lg font-medium md:text-xl">{title}</h3>
      <p className="text-sm">{description}</p>

      <div className="mt-5 flex justify-end gap-3 lg:mt-10">
        <Button type="outline" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button onClick={onClick}>{type}</Button>
      </div>
    </div>
  );
}

export default Confirmation;
