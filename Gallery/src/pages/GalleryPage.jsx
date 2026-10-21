import { useEffect } from "react"
import { Row, Col, Card } from 'react-bootstrap'

import { useDispatch, useSelector } from "react-redux"

import { fetchPictures } from "../features/pictures/picturesSlice"

function GalleryPage() {
  const disptach = useDispatch()

  const pictures = useSelector((state) => state.pictures.items)

  useEffect(() => {
    if (pictures.length === 0) {
      disptach(fetchPictures())
    }
  }, [])

  console.log(pictures)

  return (
    <>
      <div>
        <h1 className='pb-3 border-bottom text-center'>Gallerie</h1>
      </div>

      <Row className="g-3">
        {pictures.map((picture) => (
          <Col md={4} key={picture.id}>
            <Card className="shadow-sm border-0">
              <Card.Img variant='top' src={picture.url} />
              <Card.Body>
                <h2 className="h5">{picture.title}</h2>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default GalleryPage
