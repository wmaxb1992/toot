interface HealcodeWidgetProps {
  className?: string;
}

export default function HealcodeWidget({ className }: HealcodeWidgetProps) {
  const widgetHtml = `<healcode-widget 
    data-version="0.2" 
    data-link-class="healcode-pricing-option-text-link text-white" 
    data-site-id="126366" 
    data-mb-site-id="5744900" 
    data-service-id="100011" 
    data-bw-identity-site="true" 
    data-type="pricing-link" 
    data-inner-html="Buy Now" 
  />`;

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: widgetHtml }}
    />
  );
} 