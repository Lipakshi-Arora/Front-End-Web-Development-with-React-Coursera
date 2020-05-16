import React, {Component} from 'react';
import  {Card,CardImg,CardText,CardTitle,CardBody,Breadcrumb,BreadcrumbItem,Button, 
    Modal, ModalHeader, ModalBody, Row, Col, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';



function RenderDish({dish}) 
{
    if (dish != null)
    {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><b>{dish.name}</b></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else
    {
        return(
        <div></div>
        );
    }
}

function RenderComments({comments}) 
{
    if(comments == null)
    {
        return(
        <div></div>
        )
    }
    const comment =comments.map(cmts => 
    {
        return(
            <ul key={cmts.id} className="list-unstyled">
                    <li>
                        <p> {cmts.comment} </p>
                        <p> -- {cmts.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(cmts.date)))}
                        </p>
                    </li>
                </ul>
        )
    })
    return(
        <div className="col-12 col-md-5 m-1">
            <h4><b>Comments</b></h4>
            {comment}

            {/* adding comment Form */}
            <CommentForm></CommentForm> 
        </div>

    )
}

const  DishDetail = (props) => 
{
    const dish=props.dish;
    if(dish == null)
    {
        return(
            <div></div>
        )
    }
    
    return (
    <div className="container">
        <div className="row">
            <Breadcrumb>

            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                    <hr />
            </div>    
        </div>
        <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
            
        </div>
            
    </div>
    );
}

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
    
class CommentForm extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            isModalOpen: false
        };

    this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() 
    {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    submitComment(values) 
    {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render() 
    {
        return (
            <div>
                <button className="btn btn-light border border-dark" onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> 
                    &nbsp; Submit Comment
                </button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>

                    <ModalBody>
                        <LocalForm onSubmit={values => this.submitComment(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>
                                    Rating
                                </Label>

                                <Col md={12}>
                                    <Control.select 
                                        model=".rating"
                                        id=".rating"
                                        name=".rating"
                                        className="form-control">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>
                                    Your Name
                                </Label>
                                <Col md={12}>
                                    <Control.text
                                    model=".name"
                                    id="name"
                                    name="name"
                                    placeholder="Author Name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: "Required ",
                                        minLength: "Must be greater than 2 characters",
                                        maxLength: "Must be 15 characters or less"
                                    }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>
                                    Comment
                                </Label>
                                <Col md={12}>
                                    <Control.textarea
                                    model=".comment"
                                    id="comment"
                                    name="comment"
                                    rows="6"
                                    className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10 }}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default DishDetail;

