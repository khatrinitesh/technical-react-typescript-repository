// Define an interface for each accordion item
import Autocomplete from './../components/Autocomplete';
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

export interface AnimationSearchStore{
  searchTerm: string;
  isSearching: boolean;
  setSearchTerm: (term: string) => void;
  toggleSearchActive: () => void;
}

export interface AnimatedBtnStore{
  isAnimated:boolean;
  toggleAnimation:() => void;
}

export interface ArrowState{
  direction:string;
  setDirection:(direction:string) => void;
}

export interface AutocompleteStore{
  searchTerm: string;
  suggestions: string[];
  setSearchTerm: (term: string) => void;
  setSuggestions: (suggestions: string[]) => void;
  fetchSuggestions: (term: string) => void;
}

export interface AvatarStore{
  selectedAvatar:string;
  avatars:string[];
  setSelectedAvatar:(avatar:string) => void;
}

export interface HeaderStore{
  title: string;
  backgroundColor: string;
  setTitle: (title: string) => void;
  setBackgroundColor: (color: string) => void;
}

export interface ImageStore{
  selectedImage: string;
  images: string[];
  setSelectedImage: (image: string) => void;
}

export interface ChangeBgStore{
  backgroundColor:string;
  setBackgroundColor:(color:string) => void;
}

export const ChangeBgScrollStore{
  background:string;
  setBackground:(color:string) => void;
}
