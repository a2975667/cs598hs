mongoexport -h ds015849.mlab.com:15849 -d 598hs -c path -u result -p result1 -o path.json &&
mongoexport -h ds015849.mlab.com:15849 -d 598hs -c result_demographic -u result -p result1 -o result_demographic.json &&
mongoexport -h ds015849.mlab.com:15849 -d 598hs -c result_followup -u result -p result1 -o result_followup.json &&
mongoexport -h ds015849.mlab.com:15849 -d 598hs -c result_likert -u result -p result1 -o result_likert.json &&
mongoexport -h ds015849.mlab.com:15849 -d 598hs -c result_qv1 -u result -p result1 -o result_qv1.json &&
mongoexport -h ds015849.mlab.com:15849 -d 598hs -c result_qv2 -u result -p result1 -o result_qv2.json &&
mongoexport -h ds015849.mlab.com:15849 -d 598hs -c result_qv3 -u result -p result1 -o result_qv3.json &&
mongoexport -h ds015849.mlab.com:15849 -d 598hs -c result_qv4 -u result -p result1 -o result_qv4.json &&
mongoexport -h ds015849.mlab.com:15849 -d 598hs -c users -u result -p result1 -o users.json