export interface IModalConfirmProps {
  title: string;
  message: string;
  className: string;
  open: boolean;
  action: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
