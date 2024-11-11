import { useState } from "react"
import './pay.css'

export  function Pay(){
    const[appear,setappear]=useState(' d-block text-align-items-center')
    const[card,setcard]=useState('d-none')
    const[credit,setcredit]=useState('mb-3 bg-light d-none')
    const[net,setnet]=useState('mb-3 bg-light d-block')
    const[wallet,setwallet]=useState('mb-3 bg-light d-none')
    function clickCreditCard(){
        setnet('d-none')
        setwallet('d-none')
        setcredit('d-block')
    }

    function netBanking(){
        setwallet('d-none')
        setcredit('d-none')
        setnet('d-block')

    }
    function Wallet(){
        setwallet('d-block')
        setcredit('d-none')
        setnet('d-none')

    }

    function clickOffer(){
        setappear('d-block ')
        setcard('d-none')
    }

    function clickCredit(){
        setcard(' d-flex d-block')
        setappear('d-none')
    }
    function clickDebit(){
        setcard('d-flex d-block')  
        setappear('d-none')
    }
    function clicknetbanking(){
        setcard(' d-flex d-block')
        setappear('d-none')
    }
    return(
        <div>
<div class="accordion" id="faqs">
<div class="accordion-item m-4">
<div class="accordion-header">
<button data-bs-target="#fq1" data-bs-toggle="collapse" class="accordion-button bg-danger text-white">Share your Contact Details</button>
</div>
<div class="accordion-collapse collapse" id="fq1" data-bs-parent="#faqs">

<div class="accordion-body d-flex ">
    <input type="email" placeholder="emailaddress" className="form-control w-25 m-2" />
    <input type="number"placeholder="mobilenumber" className="form-control w-25 m-2"/>
    <button className="m-2 w-25 btn btn-danger">Continue</button>
    

</div>
</div>
</div>

<div class="accordion-item m-4">
    <div class="accordion-header">
        <button data-bs-target="#fq2" data-bs-toggle="collapse" class="accordion-button bg-danger text-white text-center">Unlock offers or Apply Promocodes</button>
    </div>
    <div class="accordion-collapse collapse" id="fq2" data-bs-parent="#faqs">
        <div class="accordion-body ">
           <div className="d-flex">
            <div style={{marginRight:"60px"}}> 
            <p onClick={clickOffer} className="offer">OfferCode</p> 
            </div>

            <ul class="breadcrumb">
            <li class="breadcrumb-item fw-bold offer" onClick={clickCredit}>Credit</li>
            <li class="breadcrumb-item fw-bold offer" onClick={clickDebit }>Debit</li>
            <li class="breadcrumb-item fw-bold offer" onClick={clicknetbanking}>NetBanking</li>
         
        </ul>
        </div>
        <div>
            <h3 className="text-center">Please select an Offer below</h3>
            <hr/>
            <div className={card}>
                <div>
                <input type="radio" name="card"/> <label className="me-3">ICICI Card Complimentry ticket offer  <span>Credit Card</span></label>
                </div>
               <span className="bi bi-hourglass-split" >
               </span>  <p className="me-3">VISA Blockbuster Weekends Offer</p>
               <div>
               
               <input type="radio" name="card" /> <label>ICICI Card Complimentry ticket offer  <span> debit Card</span></label>
               </div>

            </div>
            <div className={appear} id="offer">
                <h4 className>Apply for BookMyShow Offer/Discount</h4>
                <div  className="d-flex">
                <input type="text>" placeholder="offercode" className="form-control text-center me-3 w-25"/> 
                <button className="btn btn-danger w-25">Check</button>
             </div>
           

            </div>
            <hr/>
        </div>
            
        </div>
    </div>
  
</div>


<div class="accordion-item m-4">
    <div class="accordion-header">
        <button data-bs-target="#fq3" data-bs-toggle="collapse" class="accordion-button bg-danger text-white text-center">Payment options</button>
    </div>
    <div class="accordion-collapse collapse" id="fq3" data-bs-parent="#faqs">
        <div class="accordion-body  mt-1">
          <div className="row">
            <div className="col-2">
                <ul className=" list-unstyled">
                    <li className="mb-3 bg-light offer" >QuickPay</li>
                    <li className="mb-3 bg-light offer"onClick={clickCreditCard}>Credi/DebitCard</li>
                    <li className="mb-3 bg-light offer" onClick={netBanking}>Net banking</li>
                    <li className="mb-3 bg-light offer" onClick={Wallet}>MobileWallet</li>
                    <li className="mb-3 bg-light offer">Gift Voucher</li>
                </ul>
            </div>
            <div className="col-10 text-bg-light">
           <div className={credit}>
            <div className="border border-1 border-light">
                <div >
                    <h3>Enter Card Details</h3>
                    <dl>
                    <dt>CardNumber</dt>
                    <dd><input type="text" placeholder="cardnumber"/></dd>
                    <dd><input type="text" placeholder="NameonCard"/></dd>
                  
                    <dt>Expiry</dt>
                    <dd  className="input-group expiry">
                        <input type="text" placeholder="MM" className="input-group-text m-1" />
                        <input type="text" placeholder="YY" className="input-group-text m-1" />
                         </dd>
                         <dt>CVV</dt>
                       <dd><input type="text" placeholder="CVV"/></dd>
                       
                    </dl>
                    <button className="btn btn-danger">MakePayment</button>
                </div>

            </div>
           </div>
           <div className={net}>
            <div>
            <input type="radio" name="bank"/><label className="form-check-label"> <img src="sbi.png" className="m-2"/></label>
            <input type="radio" name="bank"/><label className="form-check-label">  <img src="hdfc.png"className="m-2"/></label>
            <input type="radio" name="bank"/><label className="form-check-label"> <img src="icic.png" className="m-2"/></label>
            <input type="radio" name="bank"/><label className="form-check-label"> <img src="axis.png" className="m-2"/></label>
             </div>
             <div>
                <h3>All Banks</h3>
                <select className="form-select w-50 ">
                    <option>HDFC</option>
                    <option>ICICI</option>
                   <option>SBI</option>
                   <option>UBI</option>
                </select>
             </div>
             <button className="btn btn-danger mt-2">Make Payment</button>

           </div>

           <div className={wallet}>
            <input type="radio" name="wallets"/><label><img src="amazon.png" className="m-3"/></label>
            <input type="radio" name="wallets"/><label><img src="mobi.png"  className="m-3"/></label>
            <input type="radio" name="wallets"/><label><img src="paytm.png"  className="m-3"/></label>
            <input type="radio" name="wallets"/><label><img src="payapp.png"  className="m-3"/></label>

           </div>

            </div>
          </div>
        
        </div>
    </div>
</div>
</div>

        </div>
    )
}