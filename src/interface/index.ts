export interface Actor {
  human: {
    name: string;
    lv: number;
    exp: number;
    mexp: number;
    hp: number;
    mhp: number;
  };
  vehicle: {
    name: string;
    sp: number;
    msp: number;
  };
}
