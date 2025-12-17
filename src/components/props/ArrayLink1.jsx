
function ArrayLink1({ links }) {

    return (
        <>
            {links.map((elem) => (
                <li key={elem.id}>
                    <a href="#">{elem.label}</a>
                </li>
            ))}
        </>
    );

}
export default ArrayLink1;