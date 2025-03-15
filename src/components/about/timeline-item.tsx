
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  image?: string;
}

const TimelineItem = ({ year, title, description, isLeft, image }: TimelineItemProps) => {
  return (
    <div className={`flex items-center ${isLeft ? 'flex-row-reverse' : ''}`}>
      {/* Content */}
      <div className={`w-5/12 ${isLeft ? 'text-left' : 'text-right'}`}>
        <div className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-aram-gold/20 ${isLeft ? 'mr-6' : 'ml-6'} overflow-hidden`}>
          {image && (
            <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          )}
          <h3 className="text-xl font-bold text-aram-navy mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
      
      {/* Year circle */}
      <div className="w-2/12 flex justify-center">
        <div className="bg-aram-gold text-aram-navy font-bold text-lg w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
          {year}
        </div>
      </div>
      
      {/* Empty space on other side */}
      <div className="w-5/12"></div>
    </div>
  );
};

export default TimelineItem;
