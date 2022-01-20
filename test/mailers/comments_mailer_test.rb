require "test_helper"

class CommentsMailerTest < ActionMailer::TestCase
  setup do
    @comment = comments(:one)
  end

  test "submitted" do
    mail = CommentsMailer.submitted comments(:one)
    assert_equal "New comment from #{@comment.commenter}", mail.subject
    assert_equal ["alexfrias1226@gmail.com"], mail.to
    assert_equal ["from@example.com"], mail.from
  end

end
