import { companyData } from '@/utils/constants';

const CompanyData = () => {
    return (
        <div className="flex flex-wrap justify-between gap-5 px-16 py-7 md:py-12 md:px-[140px]">
            {companyData.map((data) => (
                <div key={data?.id} className="flex flex-col gap-1 md:gap-7">
                    <p className="text-primary font-extrabold text-5xl leading-76">{data?.value}</p>

                    <p className="text-black1 font-semibold text-xl leading-6">{data?.label}</p>
                </div>
            ))}
        </div>
    );
};

export default CompanyData;
