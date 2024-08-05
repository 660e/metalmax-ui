export interface Actor {
  id: string;
  type: 'default' | 'pet' | 'pull';
  human: {
    name: string;
    lv: number;
    hp: number;
    mhp: number;
  };
  vehicle: {
    name: string;
    sp: number;
    msp: number;
  };
}
