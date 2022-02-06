module ApplicationHelper
    def flash_class(level)
        case level
            when 'notice' then "alert alert-notice"
            when 'success' then "alert alert-success"
            when 'alert' then "alert alert-error"
            when 'info' then "alert alert-info"
        end
    end
    
    def embedded_svg filename, options={}
        file = File.read(Rails.root.join('app', 'assets', 'images', filename))
        doc = Nokogiri::HTML::DocumentFragment.parse file
        svg = doc.at_css 'svg'
        if options[:class].present?
            svg['class'] = options[:class]
        end
        doc.to_html.html_safe
    end

    def list_item_opacity index, arr_size
        middle = arr_size/2.floor
        if index <= middle
            1.0 - (middle - index).to_f / 12
        else 
            1.0 - (index - middle).to_f / 12
        end
    end
end