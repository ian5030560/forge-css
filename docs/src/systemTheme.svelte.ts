export default class SystemTheme{
    private dark = $state(false);
    private name = "forge-css-theme"
    constructor(){
        const storage = localStorage.getItem(this.name);
        this.dark = storage === "dark";
    }

    get isDark(){
        return this.dark;
    }

    set isDark(value: boolean){
        localStorage.setItem(this.name, value ? "dark" : "light");
        this.dark = value;
    }
}