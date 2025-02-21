// Define an interface for each accordion item
import { DEFAULT_FORM_STATE } from '../constants/checkoutformdata';
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

export interface PreloaderStore{
  loading:boolean;
  setLoading:(loading:boolean) => void;
}

export interface CharacterCounterStore{
  text:string;
  charCount:number;
  setText:(text:string) => void;
  updateCharacterCount:() => void; 
}

export interface ChatMsgStore{
  id:string;
  user:string;
  content:string;
  timestamp:string;
}

export interface ChatBoxStore{
  messages: ChatMsgStore[]; // Array to store messages
  addMessage: (user: string, content: string) => void; // Function to add a new message
} 

export interface CheckboxStore{
  isChecked:boolean; // checkbox state (checked or not)
  toggleCheckbox:() => void; // function to toggle the checkbox
}

export interface CheckIsNumericStore{
  value:string;
  isNumeric:boolean;
  setValue:(value:string) => void;
  checkIfNumeric:() => void;
}

export interface NumericStore{
  formData: typeof DEFAULT_FORM_STATE;
  setFormData: (field: string, value: string) => void; // Function to set form field data
  validateForm: () => boolean; // Function to validate the form data
}

export interface CircleStore{
  isMenuOpen:boolean;
  toggleMenu:() => void;
}

export interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  className?: string;  // Optional class for styling
}

export interface PinState{
  rotationX:number;
  rotationY:number;
  setRotation:(x:number,y:number) => void;
}

export interface Beam{
  x:number;
  y:number;
  direction:number;
  speed:number;
}

export interface BgState {
  beams: Beam[];
  addBeam: (beam: Beam) => void;
  updateBeams: () => void;
  checkCollisions: (x: number, y: number) => boolean;
}

export interface BeamProps{
  initialX: number;
  initialY: number;
  speed: number;
  direction: number; // direction in radians
}

export interface GridItem{
  id:string;
  x:number;
  y:number;
  width:number;
  height:number;
}

export interface GridItemProps{
  items:GridItem[];
  addItem:(item:GridItem) => void;
  removeItem:(id:string) => void;
  updateItem:(id:string,updatedItem:GridItem) => void;
}

export interface RevealState {
  revealWidth: number;
  revealHeight: number;
  setRevealDimensions: (width: number, height: number) => void;
  resetReveal: () => void;
}

export interface CarState {
  x: number;
  isMoving: boolean;
  speed: number; // Speed of the car in pixels per frame
  toggleCarMovement: () => void;
  updateCarPosition: () => void;
  setSpeed: (speed: number) => void;
}
