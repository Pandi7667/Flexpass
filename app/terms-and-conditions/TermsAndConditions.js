'use client';

import Link from 'next/link';
import { useState } from 'react';
function TermsOfUseConsumer() {
    const [activeTab, setActiveTab] = useState('consumer');
    return (
        <div className='row ptop_innerpage_contact_bottom'>
            <div className='col-lg-12'>
                <div className='d-flex border-bottom mb-3 pb-3 p-5'>
                    <button
                        className={`btn me-3 ${activeTab === 'consumer' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setActiveTab('consumer')}>
                        Terms of Use - Consumer
                    </button>
                    <button
                        className={`btn ${activeTab === 'member' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setActiveTab('member')}>
                        Terms of Use - Member
                    </button>
                </div>
                {activeTab === 'consumer' && (
                    <div className='row'>
                        <div className='col-lg-12 pt-lg-4 pt-sm-43 pt-3'>
                            <h1>Flex Pass Platform</h1>
                            <p>[At Flex Pass, we bring a budget-friendly membership to premier establishments across the nation in the United States—all in one app and one membership. With a focus on flexibility, Flex Pass is here to support you in achieving fitness and wellness goals, helping you embark on a journey to a joyful and healthier lifestyle. Flex Pass members will be able to reserve, schedule, and access a wide range of fitness, wellness/beauty, and other recreational activities offered and operated by our network partners such as fitness studios, gyms, trainers, clinics, stores, and other venues or [other services provided by] third parties.]</p>
                        </div>
                        <div className='col-lg-12 pt-lg-4 pt-sm-43 pt-3 pb-3'>
                            <h1>Terms of Use Consumer</h1>
                            <p>Please read these terms of use (`Terms`) carefully before using Flex Pass’ web-based service or app (the `Services`) operated by Flex Pass, Inc (“Flex Pass”, `us`, `we`, or `our`).</p>
                            <p>Your access to and use of the Services is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Services. Flex Pass Services are offered and available to users who are 18 years of age or older and reside in the United States.</p>
                            <p>By using the Services, you represent and warrant that you are of legal age to form a binding contract with the Flex Pass and meet all of the foregoing eligibility requirements. If you do not meet all of these requirements, you must not access or use the Services.</p>
                            <p>By accessing or using the Services you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Services. </p>
                            <p><strong>Changes to the Terms of Use</strong></p>
                            <p>We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Services thereafter. However, any changes to the dispute resolution provisions set out in [Governing Law and Jurisdiction] will not apply to any disputes for which the parties have actual notice on or before the date the change is posted on the website or app.</p>
                            <p>Your continued use of the Services following the posting of revised Terms of Use means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you. </p>
                            <p><strong>Accessing Services and Account Security</strong></p>
                            <p>We reserve the right to withdraw or amend Flex Pass’ website and/or app, and any service or material we provide on the Flex Pass website and/or app, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Flex Pass website or app is unavailable at any time or for any period. From time to time, we may restrict user access, including registered user access, to some parts of or the entire Flex Pass website and/or app.</p>
                            <p>You are responsible for both:</p>
                            <ul>
                                <li>making all arrangements necessary for you to have access to the Services; and</li>
                                <li>ensuring that all persons who access Services through your internet connection or mobile phones are aware of these Terms and comply with them.</li>
                            </ul>
                            <p><strong>Intellectual Property Rights</strong></p>
                            <p>The website, the app and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Flex Pass, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
                            <p>These Terms permit you to use the Services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website or app, except as follows:</p>
                            <ul>
                                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
                                <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
                                <li>You may print one copy of a reasonable number of pages of the website or app for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
                                <li>If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.</li>
                                <li>If we provide social media features [LINK TO THE WEBSITE AND SOCIAL MEDIA FEATURES] with certain content, you may take such actions as are enabled by such features.</li>
                            </ul>
                            <p>You must not:</p>
                            <ul>
                                <li>Modify copies of any materials from this site</li>
                                <li>[Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text.]</li>
                                <li>Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site.</li>
                            </ul>
                            <p>You must not access or use for any commercial purposes any part of the Services or any services or materials available through the Services. </p>

                            <p>If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Services in breach of the Terms, your right to use the Services will stop immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title, or interest in or to the Services or any content on the Services is transferred to you, and all rights not expressly granted are reserved by Flex Pass. Any use of the Services not expressly permitted by these Terms is a breach of these Terms and may violate copyright, trademark, and other laws.</p>

                            <p><strong>1.	Membership Plans:</strong></p>
                            <ul>
                                <li>1.1	Flex Pass membership plan starts on the date that you sign up for a subscription and submit payment. Each subscription is one month in length (“Subscription Cycle”). Your Flex Pass subscription automatically renews each month, and we will automatically bill the monthly subscription fee plus credit card processing fee to your credit card each month, until your subscription is cancelled or terminated.</li>
                                <li>1.2	Flex Pass Plans:
                                    <ul>
                                        <li>•	Flex n Go Plan = $10/ monthly with no credits.</li>
                                        <li>•	One (1) flex credit is equal to $1.</li>
                                        <li>•	Flex Plan = $0/ monthly</li>
                                    </ul>
                                </li>
                                <li>1.3	You can upgrade or downgrade your membership plans at any time prior to your next subscription billing cycle. This change in membership plan will take effect on the next subscription billing cycle, allowing your current plan to complete your Subscription Cycle during the current one billing cycle.</li>
                                <li>1.4	With active membership of Flex n Go Plan, each member has the option to add more credit(s) or pay as you go for any activity as needed. Active members have full access to Flex Pass Network of Establishments. </li>
                                <li>1.5	With active membership of Flex Plan, each member has the option to add more credit(s) or pay as you go for any activity as needed. Members agree to pay a service fee of $1 per activity scheduled through our App. Has limited access to our Flex Pass network of establishments.</li>
                                <li>1.6	Credit Card processing fees will apply for each of the above transactions of 2.9% plus .30 cents.</li>
                            </ul>

                            <p><strong>2.	How Credits work:</strong></p>
                            <ul>
                                <li>2.1	Based on your type of membership, you will be allotted credit(s) to be used for booking fitness classes, services, or activities within the Flex Pass network.  You can always add more credits to your account as you go through the month.  This way you have full control over expenses. </li>
                                <li>2.2	Credits are used to book certain classes or services. Each of our network partners will have different rates of credits required depending on the Location, the popularity, time of the day, and special equipment, excluding merchandise, equipment rentals, personal training, and special membership programs offered by our network partners.</li>
                                <li>2.3	Credits have no cash value or any other value outside of the Flex Pass and are not redeemable for cash. Credit(s) does not operate or serve as stored value facilities in any way. You may not transfer, trade, gift or otherwise exchange Flex Pass credits with any other member.</li>
                                <li>2.4	Flex Pass credit(s) has no expiration rule on active members, meaning that any credits you don’t use during the applicable Subscription Cycle will roll over to your next month subscription. If your subscription is canceled or terminated, your unused credits will expire immediately. There will be no refund or payment for any unused credit(s). </li>
                            </ul>

                            <p><strong>3.	Flex Pass Account:</strong></p>
                            <ul>
                                <li>3.1	Your Flex Pass account is personal to you, and you agree not to create more than one account. You cannot transfer or gift credits or assign activities to third parties or allow third parties to use your Flex Pass account, including other Flex Pass users or members. You must be 18 years of age or older to be a member of Flex Pass. We reserve the right to cancel your membership.</li>
                                <li></li>
                                <li></li>
                            </ul>

                            <p><strong>4.	Communications/Marketing agreement:</strong></p>
                            <ul>
                                <li>4.1	We will send you information relating to your account (e.g., payment authorizations, changes in password or payment method, confirmations, and notices) in electronic form only, for example via emails to your email address provided during registration. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, provided that such communications are in writing.</li>
                                <li>4.2	In addition, if you provide to us any ideas, proposals, suggestions to improve our services (“Feedback”), any such communications or materials you send to us will be treated as non-confidential and non-proprietary and may be disseminated or used by us for any purpose, including, but not limited to, developing, creating, manufacturing, or marketing services.</li>
                            </ul>

                            <p><strong>5.	Recurring Billing:</strong></p>
                            <ul>
                                <li>5.1	Flex Pass Subscription. You authorize us to charge you for your initial Subscription Cycle and a recurring monthly subscription plan. You also authorize us to charge you every time you choose to purchase more credit(s) during your current billing cycle which includes the price per credit(s) you select plus the credit card processing fees of 2.9% plus $.30. Note that even if you do not use your membership, you will still be responsible for monthly subscription fees until you cancel your membership.</li>
                            </ul>
                            <p><strong>6.	Refunds:</strong></p>
                            <ul>
                                <li>6.1	Generally, our fees (including the monthly fee for your membership and any other fees) are nonrefundable unless we specifically communicate otherwise at the time of purchase. WE DO NOT PROVIDE REFUNDS OR MAKE GOOD FOR ANY PRIOR MONTH’S UNUSED CREDITS OR CLASSES.</li>
                            </ul>

                            <p><strong>7.	Price Changes:</strong></p>
                            <ul>
                                <li>7.1	We reserve the right to make changes to your Flex Pass Subscription rate.  If there’s a change of rate, you will be provided with a 15-day written notice prior to your next billing period.  The change will become effective unless you terminate your membership with Flex Pass.</li>
                            </ul>

                            <p><strong>8.	Cancellation of Subscription:</strong></p>
                            <ul>
                                <li>8.1	You may terminate your subscription at any time before your subscription is renewed by going into your account settings on the Flex Pass website, mobile application, or by letting us know you want to cancel. Note that if your membership is grandfather into a special promotional rate and you decide to terminate your subscription, you will lose that promotional rate if you do decide to be a member with Flex Pass in the future. If you cancel your subscription or it is terminated for any reason, you will lose access to all classes, content, credits, activities or features available through the subscription.</li>
                            </ul>

                            <p><strong>9.	No Show or Cancellation Activity Fees. </strong></p>
                            <ul>
                                <li>9.1	You are responsible for paying for the activity fee if you do not cancel an activity twelve (12) hours prior to the scheduled activity time or do not attend your scheduled Activity. If you decide to schedule an activity within the 12-hour period prior to class time, you will automatically be charged for the activity and you will not have an option to cancel that activity.</li>
                            </ul>

                            <p><strong>10.	Fees Charged by Venues: </strong></p>
                            <ul>
                                <li>10.1	In addition to fees we charge, venues may also charge equipment or other amenity fees that you will be responsible for directly. For example, some venues might charge extra to rent Boxing Gloves, yoga mats, cycling shoes etc. Further, Flex Pass only gives you access to the activity for which you signed up on the mobile application at the specified time and location. The venue may have additional fees for use of additional classes or spaces.</li>
                            </ul>

                            <p><strong>11.	Free Trials: </strong></p>
                            <ul>
                                <li>11.1	Flex Pass may offer a free trial membership that includes access to the network of partners during the trial period. The trial period begins the moment you sign up (even if you choose not to take your first Class until a later date) and ends at 11:59pm ET on the last day of the trial period. If you cancel your trial membership, your cancellation will be processed and your trial period will end immediately, your credits will expire, and your upcoming reservations will be cancelled. Each trial membership automatically will convert to a regular monthly subscription and price unless canceled by 12pm ET on the day before the last day of trial period.</li>
                            </ul>

                            <p><strong>12.	Refer a Friend.  </strong></p>
                            <ul>
                                <li>Flex Pass may make available certain incentives for users to refer a friend to use Flex Pass. </li>
                            </ul>

                            <p><strong>13.	Venue Waivers and Terms: </strong></p>
                            <ul>
                                <li>13.1	Members taking classes are deemed to agree to the liability waivers and terms of individual venues. Your participation in any class may be subject to addition policies, rules or conditions of the applicable venue and you understand and agree that you may not be permitted to reserve or attend classes or services if you do not comply with these Terms or the policies of the venues or as otherwise determined by a venue. If you have questions about a venue’s waiver or other terms, please see the applicable venue’s website or contact the venue directly.</li>
                            </ul>

                            <p><strong>14.	Termination </strong></p>
                            <ul>
                                <li>We may terminate your access to and use of the Services, at our sole discretion, at any time and without notice to you. You may cancel your account at any time by sending an email to us at <Link href="mailto:support@myflexpass.com" >support@myflexpass.com</Link> or on your mobile application. Upon any termination, discontinuation or cancellation of Services or your account, the following provisions of these Terms will survive:  feedback, ownership provisions, links to third party websites or resources, warranty disclaimers, limitations of liability, indemnity, dispute resolution provisions, and general terms. </li>
                            </ul>

                            <p><strong>15.	Privacy </strong></p>
                            <ul>
                                <li>The Flex Pass Privacy Policy (“Privacy Policy”) is hereby incorporated into these Terms by reference. Please read the Private Policy carefully for information relating to Flex Pass’s collection, use, and disclosure of your Personal Data. When you make a reservation, the applicable venue partner will have access to certain information about you, such as your name, phone number, email address and your signed waiver form for each venue if provided by Flex Pass partners, so it can process the applicable reservation or activity and provide services to you. Please see the <Link href={'/privacy-policy'}> Privacy Policy</Link> for more information.</li>
                            </ul>

                            <p><strong>16.	Indemnity </strong></p>
                            <ul>
                                <li>16.1	You will indemnify and hold harmless Flex Pass and its officers, directors, employees and agents, from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with (i) your access to or use of the Services or content of our platform [or website], (ii) your interaction, relationship or transaction with any venue partner or any dispute with the venue partner or its other guests, including without limitation any injuries, losses or damages (whether compensatory, direct, incidental, consequential or otherwise) of any kind arising in connection with or as a result of such interaction or use, or (iv) your violation of these Terms or any applicable law.</li>
                            </ul>

                            <p><strong>17.	Attorney’s Fees. </strong></p>
                            <ul>
                                <li>17.1	If any party to this Agreement resorts to a contract action to enforce or interpret any provision of this contract, the prevailing party shall be entitled to recover reasonable attorney’s fees by way of arbitration or settlement, in addition to any other relief to which that party may be entitled.</li>
                            </ul>

                            <p><strong>18.	Limitation of Liability: </strong></p>
                            <ul>
                                <li>YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE ENTIRE RISK ARISING OUT OF YOUR ACCESS TO AND USE OF THE SERVICES AND CONTENT, YOUR BOOKING OF ANY LISTING VIA THE SERVICES, YOUR USE OF ANY FACILITY, YOUR PARTICIPATION IN ANY EVENT, YOUR CREATION OF ANY EVENT, OR ANY OTHER INTERACTION, RELATIONSHIP OR TRANSACTION YOU HAVE WITH THE VENUE MANAGER OR OTHER USERS WHETHER IN PERSON OR ONLINE REMAINS WITH YOU. NEITHER FLEX PASS NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT, FROM ANY COMMUNICATIONS, INTERACTIONS OR MEETINGS WITH YOUR VENUE MANAGER OR OTHER PERSONS WITH WHOM YOU COMMUNICATE, INTERACT OR MEET WITH AS A RESULT OF YOUR USE OF THE SERVICES, OR  FROM YOUR BOOKING OF A LISTING, INCLUDING THE PROVISION OR USE OF A LISTING’S FACILITIES, OR PARTICIPATION IN OR CREATION OF AN EVENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT FLEX PASS HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.</li>

                                <li>IN NO EVENT WILL FLEX PASS TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT, OR FROM YOUR INTERACTION, RELATIONSHIP OR TRANSACTION WITH YOUR VENUE MANAGER OR OTHER USERS EXCEED THE AMOUNTS YOU HAVE PAID TO FLEX PASS FOR USE OF THE SERVICES IN THE TWELVE MONTHS PRECEDING THE CLAIM GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100), IF YOU HAVE NOT HAD ANY PAYMENT OBLIGATIONS TO FLEX PASS, AS APPLICABLE.</li>
                                <li>THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN FLEX PASS AND YOU.</li>
                            </ul>

                            <p><strong>19.	Disclaimer Of Warranties</strong></p>
                            <ul>
                                <li></li>
                            </ul>

                            <p><strong>19.	Disclaimer Of Warranties</strong></p>
                            <ul>
                                <li>19.1	TO THE FULLEST EXTENT PERMITTED BY LAW, WE MAKE NO REPRESENTATIONS OR WARRANTIES WITH RESPECT TO THE SERVICES, INCLUDING THE APPLICATION, THE FLEX PASS SUBSCRIPTION, THE SITE OR ITS CONTENT, OR ANY SITE WITH WHICH IT IS LINKED, WHICH ARE PROVIDED FOR USE “AS IS” AND ON AN “AS AVAILABLE” BASIS.  </li>
                                <li>19.2	WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, QUALITY AND FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO THE SERVICES, THE APPLICATION, THE SITE, THEIR CONTENTS, AND ANY SITE WITH WHICH THE SITE MAY BE LINKED.  </li>
                                <li>19.3	WE DO NOT WARRANT THAT THE APPLICATION, THE SITE, ITS SERVERS OR EMAIL SENT FROM US WILL BE FREE OF ANY HARMFUL COMPONENTS (INCLUDING VIRUSES).</li>
                                <li>19.4	WE ALSO MAKE NO REPRESENTATIONS OR WARRANTIES AS TO WHETHER THE APPLICATION OR SUBSCRIPTION WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED RESULTS, BE COMPATIBLE WITH ANY SOFTWARE, APPLICATIONS, HARDWARE, OR WHETHER THE INFORMATION ACCESSIBLE VIA THE APPLICATION, THE SITE, OR ANY SITE WITH WHICH IT IS LINKED, IS ACCURATE, COMPLETE OR CURRENT.</li>
                                <li>19.5	WE DO NOT PROVIDE ANY REPRESENTATIONS OR WARRANTIES AGAINST THE POSSIBILITY OF DELETION, MISDELIVERY OR FAILURE TO STORE COMMUNICATIONS, PERSONALIZED SETTINGS, OR OTHER DATA.</li>
                                <li>19.6	WE DO NOT MAKE ANY REPRESENTATIONS THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR FREE OR THAT WILL CONTINUE TO SUPPORT ANY FEATURE OF THE SERVICES.</li>
                                <li>19.7	THIS CLAUSE SHALL APPLY TO FLEX PASS, INC., ITS AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, ETC.</li>
                            </ul>

                            <p><strong>20.	Assumption Of Risk</strong></p>
                            <ul>
                                <li>20.1	Your signing of the Waiver and Release of Liability Form (“Waiver”) shall be pre-requisite take the gym classes.  This Waiver is valid for one year and will automatically renew upon its expiration. Each gym partner has its own “Gym Waiver Release of Liability Form.”</li>
                            </ul>

                            <p><strong>21.	Dispute Resolution:</strong></p>
                            <ul>
                                <li>21.1	<strong>Governing Law:</strong> These Terms and any action related thereto will be governed by the laws of the State of California without regard to its conflict of law’s provisions</li>
                                <li>21.2	<strong>Agreement to arbitrate:</strong> You and Flex Pass agree that any dispute, <i>claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof or the use of the Services or content (collectively, “Disputes”) will be settled by binding arbitration, except that each party retains the right: (i) to bring an individual action in small claims court and (ii) to seek </i> injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party’s copyrights, trademarks, trade secrets, patents or other intellectual property rights (the action described in the foregoing clause (ii), an <strong>“IP Protection Action”</strong>). Without limiting the preceding sentence, you will also have the right to litigate any other Dispute if you provide Flex Pass with written notice of your desire to do so by email or regular mail at 2385 Montpelier Dr. San Jose, CA 95116, within thirty (30) days following the date you first agree to these Terms (such notice, an “Arbitration Opt-out Notice”). If you don’t provide Flex Pass with an Arbitration Opt-out Notice within the thirty (30) day period, you will be deemed to have knowingly and intentionally waived your right to litigate any Dispute except as expressly set forth in clauses (i) and (ii) above. The exclusive jurisdiction and venue of any IP Protection Action or, if you timely provide Flex Pass with an Arbitration Opt-out Notice, will be the state and federal courts located in the Northern District of California and each of the parties hereto waives any objection to jurisdiction and venue in such courts. Unless you timely provide Flex Pass with an Arbitration Opt-out Notice, <strong> you acknowledge and agree that you and Flex Pass are each waiving the right to a trial by jury or to participate as a plaintiff or class member in any purported class action or representative proceeding. Further, unless both you and Flex Pass otherwise agree in writing, the arbitrator may not consolidate more than one person`s claims and may not otherwise preside over any form of any class or representative proceeding.</strong> If this specific paragraph is held unenforceable, then the entirety of this “Dispute Resolution” section will be deemed void. Except as provided in the preceding sentence, this “Dispute Resolution” section will survive any termination of these Terms.</li>
                                <li>21.3	Arbitration Location and Procedure: Unless you and Flex Pass otherwise agree, the arbitration will be conducted in the San Jose County in California. If your claim does not exceed $10,000, then the arbitration will be conducted solely on the basis of the documents that you and Flex Pass submit to the arbitrator, unless you request a hearing, or the arbitrator determines that a hearing is necessary. If your claim exceeds $10,000, your right to a hearing will be determined by the AAA Rules. Subject to the AAA Rules, the arbitrator will have the discretion to direct a reasonable exchange of information by the parties, consistent with the expedited nature of the arbitration.</li>
                                <li>21.4	Arbitrator’s Decision: The arbitrator will render an award within the time frame specified in the AAA Rules. The arbitrator’s decision will include the essential findings and conclusions upon which the arbitrator based the award. Judgment on the arbitration award may be entered in any court having jurisdiction thereof. The arbitrator’s award of damages must be consistent with the terms of the “Limitation of Liability” section above as to the types and amounts of damages for which a party may be held liable. The arbitrator may award declaratory or injunctive relief only in favor of the claimant and only to the extent necessary to provide relief warranted by the claimant’s individual claim.</li>
                                <li>21.5	Fees: Your responsibility to pay any AAA filing, administrative and arbitrator fees will be solely as set forth in the AAA Rules.</li>
                                <li>21.6	Changes:  Notwithstanding the provisions of the “Changes to the Terms of Use” section above, if Flex Pass changes this “Dispute Resolution” section after the date you first accepted these Terms (or accepted any subsequent changes to these Terms), you may reject any such change by sending us written notice (including by email to <Link href="mailto:rg@myflexpass.com">rg@myflexpass.com</Link> within 30 days of the date such change became effective. By rejecting any change, you are agreeing that you will arbitrate any dispute between you and Flex Pass in accordance with the provisions of this “Dispute Resolution” section as of the date you first accepted these Terms (or accepted any subsequent changes to these Terms).</li>
                            </ul>

                            <p><strong>22.	Electronic Signatures and Agreements:</strong></p>
                            <ul>
                                <li>22.1	You acknowledge and agree that by clicking on the buttons labeled `CONFIRM PURCHASE,` `SUBMIT`, `DOWNLOAD`, `PLACE MY ORDER`, `I ACCEPT` or such similar links as may be designated by Flex Pass to accept the terms and conditions of these Terms, you are submitting a legally binding electronic signature and are entering into a legally binding contract with Flex Pass.</li>
                            </ul>
                        </div>
                    </div>
                )}
                {activeTab === 'member' && (
                    <div className='row'>
                        <div className='col-lg-12 pt-lg-4 pt-sm-43 pt-3'>
                            <h1>Last Updated</h1>
                            <p>Welcome to Flex Pass, Inc. (“Flex Pass”)’s website located at <Link href={'https://myflexpass.com/'}>https://myFlexPass.com/</Link> (the “Website”). Please read these Terms of Service (the “Terms”) and our Privacy Policy available at <Link href={'https://myflexpass.com/privacy-policy/'}>https://myFlexPass.com/privacy-policy</Link>] carefully because they govern your use of our website and our platform services that enable your gym to list class and access to be made available to Flex Pass Members. To make these Terms easier to read, the Website, our services (described above) and the Flex Pass App are collectively called the “Services.”</p>
                            <p>What Flex Pass offers:</p>
                            <p>If you want to use certain features of the Services, you will have to create an account (“Account”). You can do this via the Website or and account manager can do this for you. After your account is created, you will be referred to as a `Partner Member`.</p>
                            <p>It is important that you provide us with accurate, complete, and up-to-date information for your Account and you agree to update such information, as needed, to keep it accurate, complete, and up to date. If you do not, we might have to suspend or terminate your Account.</p>
                            <p>Partner Member will receive payment of all used Flex Pass credits every month. Partner Member will receive payment by the 10th of every month through the third-party payment vendor, Tipalti.  Partner Member must pay a $1.00 fee per transaction to Tipalti.</p>
                            <p>For example, Partner Member will receive payment for the monetary value of all used Flex Pass credit(s) for the Month of January on February 10.   </p>
                            <p>You will get an email from our third-party payment vendor (Tipalti) for payout information.</p>
                            <p>Flex Pass credits: One Flex Pass credit is equivalent to $1.00 USD.</p>
                            <p>Waiver Requirement:  Before any Flex Pass Member may use your services, you must upload your gym waiver to the Flex Pass Website or App (“Waiver”).  Any Flex Pass Member that uses your services must first sign your gym Waiver before they have access to your gym.</p>
                            <p>If your gym does not have the gym waiver form, Flex Pass has a Template for GYM WAIVER AND RELEASE LIABILITY FORM which your gym can use.  The use of this Template of GYM WAIVER AND RELEASE LIABILITY FORM as a Waiver is binding between your gym and Flex Pass Member only.</p>
                            <p>Check In Process: Once Flex Pass receives the signed Waiver by a Flex Pass Member, we will provide the Flex Pass Member with access to your gym.   They will check into the gym using the App or Website.  </p>
                            <p>We reserve the right to terminate our business relationship at any time without notice:</p>
                            <p>By accessing or using our Service, you announce that you have read, understood, and agreed to this business collaboration agreement and following terms. THESE TERMS CREATE A BINDING LEGAL AGREEMENT BETWEEN YOU AND FLEX PASS, PLEASE READ THEM CAREFULLY. IF YOU DO NOT AGREE WITH ANY OF THESE TERMS, YOU SHOULD NOT ACCESS, DOWNLOAD, USE FLEX PASS WEBSITE, FLEX PASS APP OR OUR SERVICES. </p>
                            <p>Flex Pass reserves the right to modify the Terms at any time by email or posting a notice on the Website. Your access to the Website [or App] after the notice is posted indicates your acceptance of those changes. </p>
                            <p><strong>1. Account Set-Up & Documentation.</strong></p>
                            <p>1.1	Tipalti Information:   Tipalti is our exclusive third-party payment vendor.  Tipalti is a global payment automation system and accounts payable software to manage, execute and reconcile the entire process of making outbound payments to Flex Pass Partner Members.

                            </p>
<p>1.2	IRS Form W-9. Tipalti will manage this process by sending an email requesting Flex Pass Partner’s information.</p>
<p>1.3	Availability. Flex Pass Partners shall provide available classes for Flex Pass Members. Flex Pass Partners have the right to stop receiving bookings from Flex Pass Members at any time. Flex Pass Partners also the right to cancel future classes on specific days with proper prior written notices to Flex Pass Members. Flex Pass Partners will decide how many Flex Pass credits to be charge for specific classes/services.</p>
<p>1.4	Flex Pass Partner’s Web Page. You will have access to your own Web Page from our Website or App. Using this Website and our App Flex Partner can add, pause, delete classes or services, add instructors, gym locations, reports of attendance and income (6 months or yearly), edit profile, add users. Etc. provided that you do so in compliance with our Terms. To achieve such purpose, you hereby grant us a limited, non-exclusive, non-transferable, revocable license for the use of your intellectual property, including but not limited to your website URL, trademark, tradename, copyright. </p>
<p><strong>2. Payments, Exclusivity & Reporting.</strong></p>
<p>2.1	Rates Per Qualifying Reservation.  Rates are set by the Flex Pass Partner at the Flex Pass Partner’s discretion. </p>
<p>2.2	Non-Exclusivity. Flex Pass offers its Services without any exclusivity.  </p>
<p>2.3	Payment Date.  Payments to your services will be accumulated for the whole month and will be paid within ten (10) business days after the last day of each month.</p>
<p>2.4	 Banking Authorization. Tipalti is our exclusive third-party payment vendor. See Section 1</p>
<p>2.5	Flex Pass Partners agree to Flex Pass promotions. At certain times, Flex Pass Partners will be paid 50% rate off their original rate(s) during Flex Pass promotions.  Flex Pass will hold promotions such as giving new members 30 Flex Pass credits for free during a trial period.  For the moment we are taking on all expenses without the partners’ participation. Later, the development of Flex Pass. Only the gyms that will agree to take part in our promotions will be affected by this agreement</p>
<p>2.6	 No shows or late cancellation. Flex Pass Partners will still get paid for services provided to Flex Pass Member so long as the Flex Pass Member does not cancel the booking of any class twelve (12) hours prior to the scheduled time of such class.</p>
<p>2.7	Fraud.  You agree to provide Flex Pass, Inc. with complete and accurate account information, including your full legal company name, street address, e-mail address, and such other information as may be requested by Flex Pass, Inc. (collectively, “Account Information”). You are responsible for the accuracy of such Account Information and timely updating of Account Information, and you agree to promptly notify Flex Pass, Inc. in writing if any Account Information changes. Flex Pass, Inc., is not responsible for any loss or damages caused, either directly or indirectly, by inaccurate Account Information.</p>
<p>2.8	DUTY TO COOPERATE.  The implied covenant imposes upon Flex Pass and Partner Member the obligation to use their best efforts to perform under this Agreement to accomplish the purpose of this Agreement.</p>
<p><strong>3. Flex Pass Member Visits; Fees Payable by Flex Pass Members.</strong></p>
<p>3.1. You are not permitted to charge additional fees to Flex Pass Members attending classes and services booked through our App.  However, you can charge for any rentals such as special equipment, personal training, merchandise, and other items not booked or purchased through our Services.</p>
<p><strong>4. Customer Data.</strong></p>
<p>4.1. Use of Customer Data. If you have gained access to any Flex Pass Member’s Personal Data in connection with Flex Pass, you agree not to process or use such Flex Pass Member’s Personal Data for any purpose other than confirming and processing Flex Pass reservations in accordance with any documented instructions of Flex Pass (“Permitted Purpose”). </p>
<p>4.2. Security. Upon becoming aware of any actual or suspected Security Incident relating to Flex Pass Member’s Personal Data or other Flex Pass confidential information, you shall: (1) inform Flex Pass immediately; (2) take all such measures and actions as are necessary to remedy or mitigate the effects of the Security Incident; (3) take all actions necessary to comply with applicable data protection law; and (4) keep Flex Pass informed of all developments in connection with the Security Incident. You agree to remain fully liable for any breach of this Section 4 and/or applicable data protection law that is caused by an act or omission of your employees, agents, and/or third parties that gain access to Flex Pass Memebr’s Personal Data through you.</p>
<p><strong>5. Term & Termination.</strong></p>
<p>5.1	You can terminate this Agreement at any time with prior written notice. You may cancel your Account at any time by sending an email to us at <Link href="mailto:support@myflexpass.com">support@myflexpass.com</Link></p>
<p>5.2	We may terminate your access to and use of Flex Pass Services, at our sole discretion, at any time and without giving notice to you.  Upon any termination, discontinuation or cancellation of your Account, the following provisions of these Terms will survive, including, feedback, ownership provisions, links to third party websites or resources, warranty disclaimers, limitations of liability, indemnity, dispute resolution provisions, and general terms.</p>
<p><strong>6. Intellectual Property Rights.</strong></p>
<p>6.1. Flex Pass does not claim any ownership rights in any Member or Flex Pass Partner Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your Partner Member Content. Subject to the foregoing, Flex Pass and its members exclusively own all rights, title and interest in and to Flex Pass and its Content, including all associated intellectual property rights. You acknowledge that the Services and Content are protected by copyright, trademark, and other laws of the United States and foreign countries. You agree not to remove, alter, or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the Services or Content.</p>
<p>6.2 You are responsible for the Content that you post to the Platform or using our Services, shared with Flex Members on the Platform or Services, and/or otherwise provide to Flex Pass. You give us a license to use this Content to operate, improve, promote, and protect Flex Pass our Platform and Service. We use the word “Content” to mean the information, material, and any other content that you post to the Platform or otherwise send to us. Examples of your Content include:</p>
                        <ul>
                            <li>•	Messaging communications;</li>
                            <li>•	Photos;</li>
                            <li>•	All feedback, suggestions, and other communications that you send or direct to Flex Pass.</li>
                        </ul>
                        <p>By being responsible for your Content, you agree, among other things, that:</p>
                        <ul>
                            <li>•	You have all the permissions, rights, and licenses needed (including under copyrights, trademarks, contract rights, privacy rights, or publicity rights) to provide the Content to the Platform and to Flex Pass;</li>
                            <li>•	Your Content does not include personal, private, or confidential information belonging to others; and</li>
                            <li>•	Your Content does not otherwise violate the rights of any individual or entity.</li>
                        </ul>
                        <p><strong>7. Representations.</strong></p>
                        <p>You represent and warrant that:</p>
                        <p>7.1. You have the right, power, and authority to enter into this Agreement;</p>
                        <p>7.2. You are registered, to the extent required by applicable law, for sales and use tax collection purposes in all jurisdictions where the goods and/or services you make available to the Flex Pass Members through our Services will be provided;</p>
                        <p>7.3. You own all interest in and to intellectual property provided by you on our Platform or Services (“the Partner IP”) and feedback and have the right to grant us the License;</p>
                        <p>7.4.  The Partner IP, Third-Party IP and your services (including the services you make available to the Flex Pass Platform) do not include any material that gives rise to civil or criminal liability or otherwise violates any law;</p>
                        <p>7.5.  You and your employees, contractors, and agents have had proper education and training and hold all required and up-to-date regulatory authorizations, licenses, and certifications relating to any goods or services described in this Agreement;</p>
                        <p>7.6. You comply with all laws and regulations applicable to your business (including business licenses, insurance documents, etc.); </p>
                        <p>7.7.  Your business information as provided pursuant to this Agreement are accurate and you are the authorized person to receive the funds sent by Flex Pass, through Tipalti; and</p>
                        <p>7.8. You will be responsible for all your tax liabilities related to the terms under this Agreement. </p>
                        <p><strong>8. Insurance.</strong></p>
                        <p>You warrant that you possess General Liability Insurance with a policy limit of at least $1,000,000.</p>

                        <p><strong>9. Remedies.</strong></p>
                        <p>9.1. Partner Member (the `Indemnifying Party`) will indemnify, defend and hold harmless Flex Pass, its Affiliates and their respective directors, officers, employees, agents, successors and assigns (collectively, the “Indemnified Party”) against all claims, damages, losses and expenses (including reasonable outside attorney fees) with respect to any third-party claim arising out of or related to (a) a breach (or claim that, if true, would be a breach) of any of the Indemnifying Party’s representations or warranties in this, or (b) the infringement of a third party’s intellectual property rights by the Indemnifying Party’s trademarks, but only if such trademarks have been used by the Indemnified Party in the manner approved by the Indemnifying Party.</p>
                        <p>9.2. The Indemnified Party shall provide prompt notice to the Indemnifying Party of any potential claim subject to indemnification hereunder. The Indemnifying Party will assume the defense of the claim through counsel designated by it and reasonably acceptable to the Indemnified Party. The Indemnifying Party will not settle or compromise any claim, or consent to the entry of any judgment, without written consent of the Indemnified Party, which will not be unreasonably withheld. The Indemnified Party will reasonably cooperate with the Indemnifying Party in the defense of a claim, at Indemnifying Party’s expense.</p>
                        <p>9.3. Attorney’s Fees. If any legal action to enforce the terms of this Agreement, including Arbitration, the prevailing party, either by Arbitration or Settlement, shall be entitled to recover reasonable attorneys’ fees from the other party. </p>
                        <p>Flex Pass and Partner Member shall first try to resolve any issue(s) arising from terms of this Agreement before resorting to Arbitration. If, for any dispute or claim to which this provision applies, any party commences an Arbitration without first attempting to resolve the matter through negotiations or refuses to negotiate after a request has been made, then that party shall not be entitled to recover attorneys’ fees, even if they would otherwise be available to that party in the succeeding Arbitration Settlement.</p>
<p><strong>10. Limitation of Liability.</strong></p>
<p>OTHER THAN WITH RESPECT TO (i) A PARTY’S INDEMNIFICATION OBLIGATIONS IN THE GENERAL TERMS, (ii) DAMAGES ARISING FROM EITHER PARTY’S BREACH OF ITS CONFIDENTIALITY OBLIGATIONS SET FORTH IN SECTIONS 4 and 6 HEREIN, OR, (iii) DAMAGES ARISING FROM EITHER PARTY’S BREACH OF THE REPRESENTATIONS OR WARRANTIES SET FORTH IN THE GENERAL TERMS , (A) IN NO EVENT SHALL FLEX PASS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, EXEMPLARY, SPECIAL OR CONSEQUENTIAL DAMAGES, OR FOR LOSS OF BUSINESS OR PROFITS, SUFFERED BY THE OTHER PARTY OR ANY THIRD PARTY COLLECTIVELY ARISING OUT OF THIS AGREEMENT, WHETHER BASED ON CONTRACT, TORT OR ANY OTHER LEGAL THEORY, EVEN IF FLEX PASS OR COMPANY (OR THEIR AGENTS) HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND (B) IN NO EVENT SHALL EITHER PARTY BE LIABLE COLLECTIVELY UNDER THIS AGREEMENT FOR ANY DIRECT DAMAGES IN AN AMOUNT EXCEEDING THE GREATER OF (X) FIFTY THOUSAND DOLLARS ($50,000), AND (Y) THE TOTAL AMOUNTS PAID OR PAYABLE BY COMPANY TO FLEX PASS HEREUNDER IN THE TWELVE MONTHS PRECEDING THE INCIDENT THAT GAVE RISE TO THE LIABILITY.</p>
<p><strong>11. Miscellaneous.</strong></p>
<p>11.1 Relationship of the Parties. Flex Pass and Partner Member are independent contractors. Nothing in this Agreement shall be construed as creating a joint venture, partnership, franchise, or an agency relationship between the parties and neither party has the authority, without the other party`s prior written approval, to bind or commit the other party in any way.</p>
<p>11.2. Entire Agreement; Amendments. This Agreement contains the entire agreement and understanding among the parties hereto with respect to the subject matter hereof, and supersedes all prior and contemporaneous agreements, understandings, inducements, and conditions, express or implied, oral, or written, of any nature whatsoever with respect to the subject matter hereof. The express terms hereof control and supersede any course of performance inconsistent with any of the terms hereof. </p>
<p>11.3 Assignment. You may not assign or transfer the rights and obligations under this Agreement, by operation of law or otherwise, without Flex Pass’ prior written consent. Any attempt by you to assign or transfer the rights and obligations under this Agreement, without such consent, will be null and void. Flex Pass may freely assign or transfer its rights or obligations under this Agreement without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors and permitted assigns.</p>
<p>11.3 Severability. If any provision of this Agreement is held to be invalid or unenforceable, the validity and enforceability of the remaining provisions of this Agreement shall not be affected.</p>
<p>11.4 Governing law: These Terms and any action related thereto will be governed by the laws of the State of California without regard to its conflict of law’s provisions.</p>
<p><strong>12. Dispute Resolution</strong></p>
<p>12.1 Agreement to arbitrate (“Arbitration”):  You and Flex Pass agree that any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof or the use of the Services or Content (collectively, “Disputes”) will be settled by binding arbitration (“Arbitration Settlement”), except that each party retains the right: (i) to bring an individual action in small claims court and (ii) to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party’s copyrights, trademarks, trade secrets, patents or other intellectual property rights (the action described in the foregoing clause (ii), an “IP Protection Action”). Without limiting the preceding sentence, you will also have the right to litigate any other Dispute if you provide Flex Pass with written notice of your desire to do so by email or regular mail at <Link href="mailto:support@myflexpass.com">support@myflexpass.com</Link> within thirty (30) days following the date you first agree to these Terms (such notice, an “Arbitration Opt-out Notice”). If you don’t provide Flex Pass with an Arbitration Opt-out Notice within the thirty (30) day period, you will be deemed to have knowingly and intentionally waived your right to litigate any Dispute except as expressly set forth in clauses (i) and (ii) above. The exclusive jurisdiction and venue of any IP Protection Action or, if you timely provide Flex Pass with an Arbitration Opt-out Notice, will be the state and federal courts located in the Northern District of California and each of the parties hereto waives any objection to jurisdiction and venue in such courts. Unless you timely provide Flex Pass with an Arbitration Opt-out Notice, you acknowledge and agree that you and Flex Pass are each waiving the right to a trial by jury or to participate as a plaintiff or class member in any purported class action or representative proceeding. Further, unless both you and Flex Pass otherwise agree in writing, the arbitrator may not consolidate more than one person`s claims and may not otherwise preside over any form of any class or representative proceeding. If this specific paragraph is held unenforceable, then the entirety of this “Dispute Resolution” section will be deemed void. Except as provided in the preceding sentence, this “Dispute Resolution” section will survive any termination of these Terms.</p>
<p>12.2. Arbitration Location and Procedure: Unless you and Flex Pass otherwise agree, the Arbitration will be conducted in the county where you reside (except for the IP Protection Action under Section 13.1). If your claim does not exceed $10,000, then the arbitration will be conducted solely on the basis of the documents that you and Flex Pass submit to the arbitrator, unless you request a hearing, or the arbitrator determines that a hearing is necessary. If your claim exceeds $10,000, your right to a hearing will be determined by the AAA Rules. Subject to the AAA Rules, the arbitrator will have the discretion to direct a reasonable exchange of information by the parties, consistent with the expedited nature of the arbitration.</p>
<p>12.3 Arbitrator’s Decision: The arbitrator will render an award within the time frame specified in the AAA Rules. The arbitrator’s decision will include the essential findings and conclusions upon which the arbitrator based the award. Judgment on the arbitration award may be entered in any court having jurisdiction thereof. The arbitrator’s award of damages must be consistent with the terms of the “Limitation of Liability” section above as to the types and amounts of damages for which a party may be held liable. The arbitrator may award declaratory or injunctive relief only in favor of the claimant and only to the extent necessary to provide relief warranted by the claimant’s individual claim. If you prevail in Arbitration, you will be entitled to an award of attorneys’ fees and expenses, to the extent provided under applicable law.13.4 Fees: Your responsibility to pay any AAA filing, administrative and arbitrator fees will be solely as set forth in the AAA Rules. </p>
<p>12.5 Changes to Terms Governing Dispute Resolution: Notwithstanding the provisions of the “Changes to Terms or Services” section above, if Flex Pass changes this “Dispute Resolution” section after the date you first accepted these Terms (or accepted any subsequent changes to these Terms), you may reject any such change by sending us written notice (including by email to <Link href="mailto:rg@myflexpass.com">rg@myflexpass.com</Link> 30 days of the date such change became effective, as indicated in the “Last Updated” date above or in the date of Flex Pass email to you notifying you of such change. By rejecting any change, you are agreeing that you will arbitrate any Dispute between you and Flex Pass in accordance with the provisions of this “Dispute Resolution” section as of the date you first accepted these Terms (or accepted any subsequent changes to these Terms).</p>
<p><strong>13. Notices. </strong></p>
<p>13.1 Any notices or other communications provided by Flex Pass under these Terms, including those regarding modifications to these Terms, will be given: (i) via email; or (ii) by posting to the Website [or App]. For notices made by e-mail, the date of receipt will be deemed the date on which such notice is transmitted.</p>
<p>13.2 Flex Pass’ failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Flex Pass. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise.</p>
<p>13.3. Privacy Policy and Contact Information. </p>
<p>Flex Pass may manage any of your content containing personally identifiable information as set forth in Roll’s Privacy Policy, currently posted at <Link href="https://myflexpass.com/">www.myflexpass.com</Link> (The “<Link href={'https://myflexpass.com/privacy-policy/'}>Privacy Policy</Link>).</p>
<p>13.4. The Privacy Policy applies only to the Flex Pass Website [and App] and does not apply to any third-party website or service linked to the Flex Pass Website [or App] or recommended or referred to through the Website [or App] by Flex Pass or other Partner Members.  </p>
                        </div>
                        <div className='col-lg-12 pt-lg-4 pt-sm-43 pt-3 pb-3'>
                        
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default TermsOfUseConsumer