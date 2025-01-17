import React from 'react';
// import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
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
        const comment =comments.map(cmts => {
            return(
                // <li key={cmts.id}>
                //     <p>{cmts.comment}</p>
                //     <p>-- {cmts.author},
                // &nbsp;
                // {new Intl.DateTimeFormat('en-US', {
                //         year: 'numeric',
                //         month: 'long',
                //         day: '2-digit'
                //     }).format(new Date(cmts.date))}
                // </p>
                // </li>
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
                {/* <ul className="list-unstyled"> */}
                    {comment}
                {/* </ul> */}
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
        // const Item = this.renderDish(dish);
        // const ItemComment = this.renderComments(dish.comments);
        return (
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                {/* <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div> */}
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


export default DishDetail;