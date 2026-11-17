import { useEffect, useState } from "react"
import { Button, Card, Col, Row, Badge, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";


function ProfilePage() {

    const { user, token } = useAuth()
    const [userInfos, setUserInfos] = useState(null)

    useEffect(() => {
        if(!token) {
            return
        }
        const fetchUser = async () => {
            try {
                const response = await fetch('https://dummyjson.com/user/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                    },
                    credentials: 'include' 
                })

                if (!response.ok) {
                    throw new Error("ERREUR HTTP")
                }
                const data = await response.json()
                console.log(data)
                setUserInfos(data)
            } catch (error) {

            }
        }
        fetchUser();
    }, [token])
    
    return (
        <section>
            <Card className="p-5 shadow-sm border-0">

                <Row>
                    <Col md={10}>
                        {/* <h1 className="mb-3 pb-3 border-bottom">Bonjour {user?.firstName} {user?.lastName}</h1> */}
                        <h1 className="mb-3 pb-3 border-bottom">Bonjour {userInfos?.firstName} {userInfos?.lastName}</h1>
                        <p className="text-muted mb-0"><span className="fw-bold">Email : </span> {userInfos?.email}</p>
                        <p className="text-muted mb-0"><span className="fw-bold">Pseudo : </span> {userInfos?.username}</p>
                        <p className="text-muted mb-0"><span className="fw-bold">Adresse : </span> {userInfos?.address.address} {userInfos?.address.postalCode} {userInfos?.address.city}</p>
                        <hr />
                        <p className="text-muted mb-0"><span className="fw-bold">Entreprise : </span> {userInfos?.company.name} ( {userInfos?.company.address.address} {userInfos?.company.address.city} )</p>
                        <p className="text-muted mb-0"><span className="fw-bold">Secteur : </span> {userInfos?.company.department}</p>
                        <p className="text-muted mb-0"><span className="fw-bold">Poste : </span> {userInfos?.company.title}</p>
                        <p></p>
                    </Col>
                    <Col md={2}>
                        <img src={userInfos?.image} alt="" />
                    </Col>
                </Row>


            </Card>
        </section>
    )
}

export default ProfilePage
