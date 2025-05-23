function ConRender() {
    const arrItems = ["Home", "address", "to Buy"]

    const listitems = arrItems.map(
        item => <li key={arrItems.indexOf(item)} >{item}</li>
    )

    return (
        <>
            <ol>
                {arrItems.length > 0 ? listitems : ``}
            </ol>
        </>
    )
}

export default ConRender