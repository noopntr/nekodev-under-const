import React from 'react'
import droebiti from '../assets/svg/droebiti.svg'
import { Card, CardColumns } from 'react-bootstrap'

export const OfferCards = () => {
    return (
        <div id="offers" className="cards about fullScreen">
          <h1 style={{paddingBottom: '20px', textAlign: 'center'}}>რას <span style={{color: '#F97C63'}}>გთავაზობთ</span></h1>
            <CardColumns>
            <Card className="equal-height">
              <Card.Body>
                <Card.Title className="center-text 1">კონსულტაცია წარმომადგენელთან</Card.Title>
                <Card.Img variant="top" src={droebiti} alt="card" />
                <Card.Text className="center-text">
                  დამკვეთთან ერთად განვიხილავთ შეკვეთის თითოეულ ელემენტსა და მომსახურების პირობებს.
                </Card.Text>
              </Card.Body>
            </Card>
              
            <Card className="equal-height">
              <Card.Body>
                <Card.Title className="center-text 4">პროექტის გაშვება</Card.Title>
                <Card.Img variant="top" src={droebiti} alt="card" />
                <Card.Text className="center-text">
                  პროქტის გაშვება ხდება მაქსიმალურად დაცულ სერვერებზე
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="equal-height">
              <Card.Body>
                <Card.Title className="center-text 2">პროგრამული გეგმის შემუშავება</Card.Title>
                <Card.Img variant="top" src={droebiti} alt="card" />
                <Card.Text className="center-text">
                  ჩვენი დეველოპერები განიხილავენ შეკვეთის ფუნქციონალისა და ტექნიკური უზრუნველყოფის
                  საკითხს
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="equal-height">
              <Card.Body>
                <Card.Title className="center-text 5">პროექტის მენეჯმენტი</Card.Title>
                <Card.Img variant="top" src={droebiti} alt="card" />
                <Card.Text className="center-text">
                  დამკვეთის სურვილისამებრ ჩვენ ვერთვებით თქვენი პროექტის მენეჯმენტში
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="equal-height">
              <Card.Body>
                <Card.Title className="center-text 3">პროექტის დიზაინი</Card.Title>
                <Card.Img variant="top" src={droebiti} alt="card" />
                <Card.Text className="center-text">
                  პროექტის სრულყოფილად შექმნა და გამართვა
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="equal-height">
              <Card.Body>
                <Card.Title className="center-text 6">პროგრამული განახლება</Card.Title>
                <Card.Img variant="top" src={droebiti} alt="card" />
                <Card.Text className="center-text">
                  ადმინისტრირების შემთხვევაში, ჩვენ ვმუშაობთ მის განახლებებზე, დროთა მანძილზე შეგვაქვს
                  განახლებები
                </Card.Text>
              </Card.Body>
            </Card>
            </CardColumns>
          </div>
    )
}
