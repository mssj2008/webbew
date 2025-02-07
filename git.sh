commitm=""
echo "Enter Commit Message: "
read  commitm
echo "pushin shi..."
git add .
git commit -m "$commitm"
git push