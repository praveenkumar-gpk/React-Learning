import React, { Fragment } from "react";
import { Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './BodyForHeading.css'

const BodyForHome = ()=>{
    return <Fragment>
        <Container>
            <h2 id="heading_for_home">Tours</h2>
            <div>
                <div class='row row_for_heading'>
                    <span class="col-3">JUL 16</span>
                    <span class="col-3">DETROIT, MI</span>
                    <span class="col-3">DTE ENERGY MUSIC THEATRE</span>
                    <span class="col-3" ><Button variant="secondary" onClick={()=>alert('Ticket has been bought')} style={{borderRadius:80}}>Buy Tickets</Button></span>
                </div>
                <div class='row row_for_heading' >
                    <span class="col-3">JUL 19</span>
                    <span class="col-3">TORONTO,ON</span>
                    <span class="col-3">BUDWEISER STAGE</span>
                    <span class="col-3"><Button variant="secondary" onClick={()=>alert('Ticket has been bought')} style={{borderRadius:80}}>Buy Tickets</Button></span>
                </div>
                <div class='row row_for_heading' >
                    <span class="col-3">JUL 22</span>
                    <span class="col-3">BRISTOW, VA</span>
                    <span class="col-3">JIGGY LUBE LIVE</span>
                    <span class="col-3"><Button variant="secondary" onClick={()=>alert('Ticket has been bought')} style={{borderRadius:80}}>Buy Tickets</Button></span>
                </div>
                <div class='row row_for_heading' >
                    <span class="col-3">JUL 29</span>
                    <span class="col-3">PHOENIX, AZ</span>
                    <span class="col-3">AK-CHIN PAVILION</span>
                    <span class="col-3"><Button variant="secondary" onClick={()=>alert('Ticket has been bought')} style={{borderRadius:80}}>Buy Tickets</Button></span>
                </div>
                <div class='row row_for_heading' >
                    <span class="col-3">AUG 2</span>
                    <span class="col-3">LAS VEGAS, NV</span>
                    <span class="col-3">T-MOBILE ARENA</span>
                    <span class="col-3"><Button variant="secondary" onClick={()=>alert('Ticket has been bought')} style={{borderRadius:80}}>Buy Tickets</Button></span>
                </div>
                <div class='row row_for_heading' >
                    <span class="col-3">AUG 7</span>
                    <span class="col-3">CONCORD, CA</span>
                    <span class="col-3">CONCORD PAVILION</span>
                    <span class="col-3"><Button variant="secondary" style={{borderRadius:80}} onClick={()=>alert('Ticket has been bought')}>Buy Tickets</Button></span>
                </div>
            </div>
        </Container>
    </Fragment>
}

export default BodyForHome;