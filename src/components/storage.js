export default class {
    constructor()
    { if (isNaN(this.GetCONFIG())) { this.SetCONFIG(0); } if (window.localStorage.length !== 1) 
    { let config = this.GetCONFIG(); if (config > 0xFF) { config &= 0xFF; } else if (config == null || isNaN(config)) 
    { config = 0; } window.localStorage.clear(); this.SetCONFIG(config); } } 
    value = 0; THEME = { LIGHT: 0, DARK: 1 }; LANG = { KOREAN: 0, ENGLISH: 1 };
    GetCONFIG(sess = true)
    { return (sess ? parseInt(window.localStorage.getItem("CODE")) : this.value) }
    SetCONFIG(code = 0)   
    { this.value = code; window.localStorage.setItem("CODE", `${this.value}`) }
    GetTHEME(theme = this.THEME.LIGHT)
    { return ((0b0001 & this.value) >> 0) === theme }
    SetTHEME(theme = this.THEME.LIGHT)
    { this.value = (this.value & 0b1110) | (0b0001 & (theme << 0)); window.localStorage.setItem("CODE", `${this.value}`) }
    GetLANG(lang = this.LANG.KOREAN)
    { return ((0b0010 & this.value) >> 1) === lang}
    SetLANG(lang = this.LANG.KOREAN)
    { this.value = (this.value & 0b1101) | (0b0010 & (lang << 0)); window.localStorage.setItem("CODE", `${this.value}`) }
};
