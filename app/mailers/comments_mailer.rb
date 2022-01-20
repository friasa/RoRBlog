# frozen_string_literal: true

class CommentsMailer < ApplicationMailer
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.comments_mailer.submitted.subject
  #
  def submitted(comment)
    @comment = comment

    mail to: 'alexfrias1226@gmail.com', subject: "New comment from #{@comment.commenter}"
  end
end
