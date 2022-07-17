import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import EditVehicleModal from "./EditVehicleModal"
import DeleteVehicleModal from "./DeleteVehicleModal"
import NewVehicleModal from "./NewVehicleModal"

export default function Home() {

    const [Item, setItem] = useState([])

    const getItems = async () => {
        try {
            const response = await fetch("https://localhost:7075/api/Vehicles")
            const jsonData = await response.json()

            setItem(jsonData);
            console.log(jsonData);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <>
            <div className="Home-Container container">
                <div className="row">
                    <h1 className="Header-Up" colSpan="6"><div className="vec">vec</div></h1>
                    <h1 className="Header-Down" colSpan="6"><div className="fleet">FLEET</div></h1>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="row">Tipo de Vehículo</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Patente</th>
                                <th scope="col">N° Chasis</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Item.map(Item => (
                                <tr key={Item.id.toString()}>
                                    <td>{Item.typeName}</td>
                                    <td>{Item.brand}</td>
                                    <td>{Item.model}</td>
                                    <td>{Item.patent}</td>
                                    <td>{Item.chassisNumber}</td>
                                    <td><EditVehicleModal Item={Item}/> <DeleteVehicleModal Item={Item}/></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="6"><NewVehicleModal /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}