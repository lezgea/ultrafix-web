import React from 'react';
import { Modal } from '../modal';


interface IConfirmationModalProps {
    visible: boolean,
    onClose: () => void,
    onConfirm?: () => void,
}

export const TermsModal: React.FC<IConfirmationModalProps> = (props) => {
    let { visible, onClose } = props;

    return (
        <Modal
            visible={visible}
            content={
                <ModalContent onClose={onClose} />
            }
            onClose={onClose}
        />
    )
}

interface IModalContent {
    onClose: () => void,
}

const ModalContent: React.FC<IModalContent> = (props) => {
    let { onClose } = props;

    return (
        <div className="flex flex-col md:max-w-[80vw] max-h-[80vh] overflow-y-scroll p-7 md:p-10 space-y-5 text-center">
            <h2 className="text-2xl md:text-3xl">Terms and Conditions</h2>
            <p className='font-light'>
                Welcome to UltraFix.com! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern UltraFix Appliance Repair’s relationship with you in relation to this website.
            </p>
            <div className='text-start space-y-5'>
                <div>
                    <h3 className='font-medium'>1. Introduction</h3>
                    <p className='font-light'>
                        These Terms and Conditions ("Terms") govern your access to and use of UltraFix.com ("Website") and its services. By accessing or using the Website, you agree to abide by these Terms. If you do not agree with these Terms, you must not use the Website.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>2. Services</h3>
                    <p className='font-light'>
                        UltraFix.com provides appliance repair services and information ("Services"). All services provided are subject to these Terms and any agreements you may enter into with us.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>3. Use of Website</h3>
                    <p className='font-light'>
                        You must be at least 18 years old or have parental consent to use this Website.
                        You agree not to misuse the Website or interfere with its normal functioning.
                        Any information you provide through the Website must be accurate, complete, and up-to-date.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>4. Intellectual Property</h3>
                    <p className='font-light'>
                        All content on UltraFix.com, including but not limited to text, images, logos, and videos, is the property of UltraFix Appliance Repair or its licensors. You may not reproduce, distribute, or otherwise use the content without written permission.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>5. User Accounts</h3>
                    <p className='font-light'>
                        To access certain features of the Website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>6. Privacy Policy</h3>
                    <p className='font-light'>
                        Your use of the Website is also governed by our Privacy Policy, which can be found here.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>7. Payment and Pricing</h3>
                    <p className='font-light'>
                        Prices for our services are listed on the Website. We reserve the right to change prices at any time without notice. Payments must be made in accordance with the terms presented at the time of booking or purchase.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>8. Limitation of Liability</h3>
                    <p className='font-light'>
                        UltraFix Appliance Repair is not liable for any damages or losses arising from your use of the Website or reliance on any information provided. This includes direct, indirect, incidental, and consequential damages.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>9. Third-Party Links</h3>
                    <p className='font-light'>
                        The Website may contain links to third-party websites. These links are provided for your convenience, and we have no control over the content or availability of those sites.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>10. Governing Law</h3>
                    <p className='font-light'>
                        These Terms are governed by the laws of State of Texas, USA, without regard to its conflict of laws principles. Any disputes arising under these Terms will be subject to the exclusive jurisdiction of the courts located in State of Texas, USA.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>11. Changes to Terms</h3>
                    <p className='font-light'>
                        We reserve the right to modify or update these Terms at any time. Any changes will be effective upon posting to the Website. It is your responsibility to review these Terms periodically.
                    </p>
                </div>
                <div>
                    <h3 className='font-medium'>12. Contact Us</h3>
                    <p className='font-light'>If you have any questions about these Terms, please contact us at:</p>
                    <p className='font-light ml-5 mt-2'>- Email: <strong className="font-medium text-primary">info@ultrafix.com</strong></p>
                    <p className='font-light ml-5 mt-1'>- Phone: <strong className="font-medium text-primary">(888) 998-6263</strong></p>
                </div>
            </div>
            <div className="flex w-full justify-end space-x-3">
                <button
                    onClick={onClose}
                    className="inline-flex text-center justify-center px-4 py-2 text-primaryDark transition-all border border-primaryDark rounded-lg hover:bg-primaryDark hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:shadow-none animate-button"
                    aria-label="Join the Race"
                >
                    Close
                </button>
            </div>
        </div>
    )
}
