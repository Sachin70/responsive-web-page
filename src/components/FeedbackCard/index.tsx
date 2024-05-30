import LeftQuote from '@public/svg/left-quote.svg';
import RightQuote from '@public/svg/right-quote.svg';

interface IFeedbackCardProps {
    feedback: string;
    clientName: string;
    date: string;
    clientImage?: any;
}

const FeedbackCard = (props: IFeedbackCardProps) => {
    const { clientImage: Icon, clientName, date, feedback } = props;

    return (
        <section className="group px-6 py-10 rounded-lg w-full min-w-[380px] max-h-[358px] flex flex-col gap-6 hover:bg-primary hover:shadow-shadow1">
            <p className="text-gray1 font-normal text-xl leading-30 group-hover:text-white">
                <span>
                    <LeftQuote />
                </span>
                {feedback}
                <span>
                    <RightQuote className="ml-auto" />
                </span>
            </p>

            <div className="flex gap-4">
                {Icon && <Icon className="group-hover:fill-white" />}

                <div className="flex flex-col gap-2">
                    <p className="text-black3 font-bold text-lg leading-26 group-hover:text-white">
                        {clientName}
                    </p>

                    <p className="text-gray1 font-normal text-sm group-hover:text-gray2">{date}</p>
                </div>
            </div>
        </section>
    );
};

export default FeedbackCard;
