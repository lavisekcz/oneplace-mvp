type Service = {
  slug: string;
  name: string;
  desc: string;
};

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold">{service.name}</h3>
      <p className="text-gray-600 mt-2">{service.desc}</p>
    </div>
  );
}