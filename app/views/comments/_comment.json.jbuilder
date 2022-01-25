json.extract! comment, :id, :commenter, :content, :created_at, :updated_at
json.url post_url(comment, format: :json)
