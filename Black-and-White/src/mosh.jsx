

function ListGroup(){
    const items=['New York','Tokyo','London','Mumbai']
          
    
    return (
         
         <> 

        <h1>List</h1> 
        {items.length === 0 ? <p>no item found</p>: null}
        <ul classNmae='list-group'>
            {items.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>



        {/* <ul className="List-group">
            <li className="List-group-item">ITEM 1</li>
            <li className="List-group-item">ITEM 2</li>
            <li className="List-group-item">ITEM 3</li>
            <li className="List-group-item">ITEM 4</li>
            <li className="List-group-item">ITEM 5</li>
        </ul> */}
        </>
    )
}
export default ListGroup;

 



