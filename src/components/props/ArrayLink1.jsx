const nav = [
    {
        id: 1,
        label: "Characters",
    },
    {
        id: 2,
        label: "Comics",
    },
    {
        id: 3,
        label: "Movies",
    },
    {
        id: 4,
        label: "TV",
    },
    {
        id: 5,
        label: "Games",
    },
    {
        id: 6,
        label: "Collectibles",
    },
    {
        id: 7,
        label: "Videos",
    },
    {
        id: 8,
        label: "Fans",
    },
    {
        id: 9,
        label: "News",
    },
    {
        id: 10,
        label: "Shop",
    },

];
function ArrayLink1() {

    return (
        <>
            {nav.map((elem) => (
                <li key={elem.id}>
                    <a href="#">{elem.label}</a>
                </li>
            ))}
        </>
    );

}
export default ArrayLink1;