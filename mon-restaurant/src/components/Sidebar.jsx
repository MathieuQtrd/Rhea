import CategoriesList from "./CategoriesList"
import InputGroup from "./InputGroup"
import TagButton from "./TagButton"
import { Col } from 'react-bootstrap'


const Sidebar = ({categories, tags}) => {
    return (
        <Col md="3">
            <CategoriesList
                categories={categories}
            />
            <div className="my-3 border p-3">
                <InputGroup
                    groupText="€"
                    type="text"
                    name="prix"
                    classList="form-control"
                    placeholder="Filtrer par prix"
                />
            </div>
            <div className="my-3 border p-3">
                <InputGroup
                    groupText="abc"
                    type="text"
                    name="tag"
                    classList="form-control"
                    placeholder="Filtrer par mot clés"
                />
            </div>
            <div className="my-3 border p-3">
                {tags?.map(tag => (
                    <TagButton 
                        key={tag.id}
                        name={tag.name}
                        href={tag.href}
                        classList="me-1 mb-1 btn-sm"
                        variant="outline-dark"
                    />
                ))}
            </div>
        </Col>
    )
}

export default Sidebar
