import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component 
{
    renderDish(dish) 
    {
        if (dish != null)
        {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name} />
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

    renderComments(comments)
    {
        if(comments == null)
        {
            return(
            <div></div>
            )
        }
        const comment =comments.map(cmts => {
            return(
                <li key={cmts.id}>
                    <p>{cmts.comment}</p>
                    <p>-- {cmts.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(cmts.date))}
                </p>
                </li>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4><b>Comments</b></h4>
                <ul className="list-unstyled">
                    {comment}
                </ul>
            </div>
        )
    }

    render() 
    {
        const dish=this.props.dish;
        if(dish == null)
        {
            return(
                <div></div>
            )
        }
        const Item = this.renderDish(dish);
        const ItemComment = this.renderComments(dish.comments);
        return (
          <div className="row">
              {Item}
              {ItemComment}
          </div>  
        );
    }
}

export default DishdetailComponent;