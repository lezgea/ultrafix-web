import { AppliancesIllustration } from '@assets/icons';
import { ContactForm } from '@components/features/sign-up';
import SectionLayout from '@components/layout/section-layout';
import * as motion from "framer-motion/client"
import React from 'react';


export const ContactSection: React.FC = () => {
    return (
        <SectionLayout
            scrollId="contact"
            title="Contact Us"
            description="We have been providing top service! See just how our UltraFix Appliance Repair Service can better your life today!"
        >
            {/* <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center lg:mt-20"
            >
                <AppliancesIllustration className="h-[200px] md:h-auto" />
            </motion.div> */}
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className='flex items-center justify-center bg-white rounded-3xl shadow-top-lg p-4 lg:p-10'
            >
                <ContactForm />
            </motion.div>
        </SectionLayout>
    )
}

ContactSection.displayName = "ContactSection";