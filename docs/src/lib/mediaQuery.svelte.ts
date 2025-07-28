export default function mediaQuery(query: string){
    let show = $state(false);

    $effect(() => {
        const match = window.matchMedia(query);
        show = match.matches;

        function update(e: MediaQueryListEvent) {
            show = e.matches;
        }
        match.addEventListener("change", update);
        return () => {
            match.removeEventListener("change", update);
        }
    });

    return show;
}