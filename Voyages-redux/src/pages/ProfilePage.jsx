import { useEffect, useState } from "react"
import { Button, Card, Col, Row, Badge, Alert } from "react-bootstrap";
// import { useAuth } from "../context/AuthContext";


function ProfilePage() {

    // const { user, token } = useAuth()
    const [userInfos, setUserInfos] = useState(null)

    
    return (
        <section>
            <Card className="p-5 shadow-sm border-0">

                <Row>
                    <Col md={10}>
                       
                    </Col>
                    <Col md={2}>
                        
                    </Col>
                </Row>


            </Card>
        </section>
    )
}

export default ProfilePage
