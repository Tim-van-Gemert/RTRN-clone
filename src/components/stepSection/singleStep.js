import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../templates/button";

export default function SingleStep(props) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <motion.div
            ref={ref}
            className="w-full h-full group flex justify-between group py-[16px] xl:pl-[32px] border-b-[1px] xl:border-b-[0px] xl:border-l-[1px] border-black flex-col"
            initial={{ height: inView ? '0%' : '100%' }}
            animate={{ height: inView ? '100%' : '0%' }}
            transition={{ duration: 1, delay: props.delay }}
        >
            <div className="flex flex-col gap-[32px]">
                <h4 className="steps">{props.title}</h4>
                <Button
                    key={props.title + "Button"}
                    arrow={true}
                    hovercColor={"yellow"}
                    baseColor={"white"}
                    content={props.button}
                />
            </div>
            <p className={`opacity-0 group-hover:opacity-100 transition-all p-small w-[336px]`}>
                {props.desc}
            </p>
        </motion.div>
    );
}
