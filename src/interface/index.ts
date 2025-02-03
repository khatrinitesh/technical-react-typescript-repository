// Define an interface for each accordion item
export interface AccordionItem {
  title: string;
  content: string;
}

export interface BtnPrimaryProps{
  children:React.ReactNode;
  btnStyle:React.CSSProperties;
  onClick:() => void;
}

export interface AlertStore{
  isAlertOpen:boolean;
  alertMsg:string;
  showAlert:(message:string) => void;
  hideAlert:() => void;
}

export interface AnimateIconStore{
  isVisible:boolean;
  toggleVisibility:() => void;
}